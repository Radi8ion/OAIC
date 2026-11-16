'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import { navConfig } from '@/data/nav';
import { cn } from '@/lib/cn';
import type { NavItem } from '@/types';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';

const partnerLogos = [
  { href: 'https://aicsoa.in/', src: '/images/sponsors/aiclogo.png', alt: 'AIC-SOA Foundation', w: 708, h: 352, cls: 'h-6 md:h-7' },
  { href: 'https://soa.ac.in', src: '/images/sponsors/SOA.png', alt: "Siksha 'O' Anusandhan", w: 681, h: 680, cls: 'h-7 md:h-8' },
  { href: 'https://www.comsoc.org', src: '/images/sponsors/future_networks.png', alt: 'IEEE Future Networks', w: 200, h: 179, cls: 'h-7 md:h-8' },
  { href: 'https://testbed.ieee.org/', src: '/images/sponsors/innovation_testbed.png', alt: 'IEEE 5G/6G Innovation Testbed', w: 1855, h: 1137, cls: 'h-7 md:h-8' },
  { href: 'https://www.computer.org', src: '/images/sponsors/CS-Bhubaneswar.png', alt: 'IEEE Computer Society Bhubaneswar Chapter', w: 500, h: 500, cls: 'h-9 md:h-10' },
  { href: 'https://www.odishasociety.org', src: '/images/sponsors/OSA-logo-small.png', alt: 'The Odisha Society of the Americas', w: 92, h: 33, cls: 'h-5 md:h-6' },
  { href: 'https://odiasocietyuk.org', src: '/images/sponsors/odisha-society-uk.png', alt: 'Odisha Society of the UK', w: 330, h: 169, cls: 'h-6 md:h-7' },
  { href: 'https://www.ieee.org', src: '/images/sponsors/IEEE-Bhubaneswar-Section-1-1.png', alt: 'IEEE Bhubaneswar Section', w: 1000, h: 1000, cls: 'h-10 md:h-11' },
];

const ieeeLinks = [
  { label: 'IEEE.org', href: 'https://www.ieee.org' },
  { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/Xplore/home.jsp' },
  { label: 'IEEE Standards', href: 'https://standards.ieee.org/' },
  { label: 'IEEE Spectrum', href: 'https://spectrum.ieee.org/' },
];

const isExternal = (href?: string) => !!href && href.startsWith('http');

function isItemActive(item: NavItem, pathname: string): boolean {
  if (item.href && (pathname === item.href || pathname.startsWith(item.href + '/'))) return true;
  return !!item.children?.some((c) => c.href && !isExternal(c.href) && pathname.startsWith(c.href));
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Partner bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-wide flex h-12 items-center justify-between gap-6 md:h-14">
          <ul className="hidden shrink-0 items-center gap-5 text-xs font-medium lg:flex">
            {ieeeLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-900">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul
            className="no-scrollbar -mx-1 flex min-w-0 flex-1 items-center gap-5 overflow-x-auto px-1 md:gap-6 lg:flex-none lg:justify-end"
            aria-label="Organising partners"
          >
            {partnerLogos.map((p) => (
              <li key={p.alt} className="flex shrink-0 items-center">
                <a href={p.href} target="_blank" rel="noopener noreferrer" title={p.alt} className="flex items-center">
                  <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className={cn('w-auto object-contain', p.cls)} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnnouncementBanner />

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="container-wide flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="OAIC 2026 home">
            <Image src="/images/logo.png" alt="Odisha AI" width={163} height={200} className="h-12 w-auto" priority />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-serif text-lg font-semibold text-primary-950">OAIC 2026</span>
              <span className="text-[11px] font-medium text-gray-500">Odisha AI Conference</span>
            </span>
          </Link>

          <nav className="hidden h-full items-stretch xl:flex" aria-label="Primary">
            {navConfig.map((item) => {
              const active = isItemActive(item, pathname);
              const hasChildren = !!item.children?.length;
              const expanded = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative flex items-stretch"
                  onMouseEnter={() => hasChildren && openMenu(item.label)}
                  onMouseLeave={() => hasChildren && scheduleClose()}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(expanded ? null : item.label)}
                      onKeyDown={(e) => e.key === 'Escape' && setOpenDropdown(null)}
                      className={cn(
                        'relative flex items-center gap-1 px-3 text-sm font-medium transition-colors',
                        active ? 'text-primary-950' : 'text-gray-700 hover:text-primary-950',
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', expanded && 'rotate-180')} aria-hidden />
                      {active && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-brand-700" />}
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative flex items-center px-3 text-sm font-medium transition-colors',
                        active ? 'text-primary-950' : 'text-gray-700 hover:text-primary-950',
                      )}
                    >
                      {item.label}
                      {active && <span className="absolute inset-x-3 bottom-0 h-0.5 bg-brand-700" />}
                    </Link>
                  )}

                  {hasChildren && expanded && (
                    <div className="absolute left-0 top-full z-50 min-w-60 max-w-xs rounded-b-md border border-gray-200 bg-white py-1.5 shadow-lg">
                      {item.children!.map((child) => {
                        const ext = isExternal(child.href);
                        const current = pathname === child.href;
                        return (
                          <Link
                            key={child.label}
                            href={child.href!}
                            target={ext ? '_blank' : undefined}
                            rel={ext ? 'noopener noreferrer' : undefined}
                            onClick={() => setOpenDropdown(null)}
                            onBlur={(e) => {
                              if (!e.currentTarget.parentElement?.parentElement?.contains(e.relatedTarget as Node)) {
                                setOpenDropdown(null);
                              }
                            }}
                            className={cn(
                              'flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors',
                              current ? 'bg-gray-50 font-semibold text-primary-950' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-950',
                            )}
                          >
                            <span>{child.label}</span>
                            {ext && <ExternalLink className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-label="(opens in new tab)" />}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <button
            type="button"
            className="-mr-2 rounded-md p-2 text-primary-950 hover:bg-gray-100 xl:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn('fixed inset-0 z-[70] xl:hidden', mobileOpen ? 'visible' : 'invisible')}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn('absolute inset-0 bg-gray-900/40 transition-opacity', mobileOpen ? 'opacity-100' : 'opacity-0')}
          onClick={() => setMobileOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            'absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-200',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 px-4">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
              <Image src="/images/logo.png" alt="Odisha AI" width={163} height={200} className="h-10 w-auto" />
              <span className="font-serif text-base font-semibold text-primary-950">OAIC 2026</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="-mr-2 rounded-md p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-3" aria-label="Mobile">
            {navConfig.map((item) => (
              <MobileNavItem key={item.label} item={item} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

function MobileNavItem({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) {
  const active = isItemActive(item, pathname);
  const [open, setOpen] = useState(active);

  const rowClass = cn(
    'flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px] font-medium',
    active ? 'text-primary-950' : 'text-gray-700 hover:bg-gray-50',
  );

  if (!item.children?.length) {
    return (
      <Link href={item.href!} onClick={onNavigate} className={rowClass} aria-current={active ? 'page' : undefined}>
        <span className="flex items-center gap-2">
          {active && <span className="h-4 w-0.5 bg-brand-700" aria-hidden />}
          {item.label}
        </span>
      </Link>
    );
  }

  return (
    <div>
      <button type="button" onClick={() => setOpen(!open)} className={rowClass} aria-expanded={open}>
        <span className="flex items-center gap-2">
          {active && <span className="h-4 w-0.5 bg-brand-700" aria-hidden />}
          {item.label}
        </span>
        <ChevronDown className={cn('h-4 w-4 text-gray-500 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      {open && (
        <ul className="mb-2 ml-3 border-l border-gray-200 pl-2">
          {item.children.map((child) => {
            const ext = isExternal(child.href);
            const current = pathname === child.href;
            return (
              <li key={child.label}>
                <Link
                  href={child.href!}
                  target={ext ? '_blank' : undefined}
                  rel={ext ? 'noopener noreferrer' : undefined}
                  onClick={onNavigate}
                  className={cn(
                    'flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm',
                    current ? 'font-semibold text-primary-950' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-950',
                  )}
                >
                  <span>{child.label}</span>
                  {ext && <ExternalLink className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
