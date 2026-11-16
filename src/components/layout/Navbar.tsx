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
  { href: 'https://aicsoa.in/', src: '/images/sponsors/aiclogo.png', alt: 'AIC-SOA Foundation', w: 708, h: 352, cls: 'h-5 md:h-7 brightness-0 invert' },
  { href: 'https://soa.ac.in', src: '/images/sponsors/SOA.png', alt: "Siksha 'O' Anusandhan", w: 681, h: 680, cls: 'h-7 md:h-8' },
  { href: 'https://www.comsoc.org', src: '/images/sponsors/future_networks.png', alt: 'IEEE Future Networks', w: 200, h: 179, cls: 'h-6 md:h-8 brightness-0 invert' },
  { href: 'https://testbed.ieee.org/', src: '/images/sponsors/innovation_testbed.png', alt: 'IEEE 5G/6G Innovation Testbed', w: 1855, h: 1137, cls: 'h-6 md:h-8 brightness-0 invert' },
  { href: 'https://www.computer.org', src: '/images/sponsors/CS-Bhubaneswar.png', alt: 'IEEE Computer Society Bhubaneswar Chapter', w: 500, h: 500, cls: 'h-9 md:h-10' },
  { href: 'https://www.odishasociety.org', src: '/images/sponsors/OSA-logo-small.png', alt: 'The Odisha Society of the Americas', w: 92, h: 33, cls: 'h-5 md:h-6' },
  { href: 'https://odiasocietyuk.org', src: '/images/sponsors/odisha-society-uk.png', alt: 'Odisha Society of the UK', w: 330, h: 169, cls: 'h-6 md:h-7' },
  { href: 'https://site.ieee.org/bhubaneswar/', src: '/images/sponsors/ieeebbs.png', alt: 'IEEE Bhubaneswar Section', w: 476, h: 227, cls: 'h-5 md:h-7 brightness-0 invert' },
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
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
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

      {/* Top utility bar */}
      <div className="bg-primary-950 text-white">
        <div className="container-wide no-scrollbar flex h-11 items-center justify-between gap-6 overflow-x-auto md:h-14">
          <ul className="flex shrink-0 items-center text-xs font-medium md:text-[13px]">
            {ieeeLinks.map((l, i) => (
              <li key={l.label} className="flex items-center">
                {i > 0 && <span className="mx-2.5 h-3 w-px bg-white/25 md:mx-3" aria-hidden />}
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap py-2 text-white/80 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 items-center" aria-label="Organising partners">
            {partnerLogos.map((p, i) => (
              <li key={p.alt} className="flex items-center">
                {i > 0 && <span className="mx-2.5 h-4 w-px bg-white/20 md:mx-3.5" aria-hidden />}
                <a href={p.href} target="_blank" rel="noopener noreferrer" title={p.alt} className="flex items-center opacity-90 transition-opacity hover:opacity-100">
                  <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className={cn('w-auto object-contain', p.cls)} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnnouncementBanner />

      <header
        className={cn(
          'sticky top-0 z-50 border-b border-primary-100 bg-primary-50 transition-shadow duration-300',
          scrolled && 'shadow-md',
        )}
      >
        <div className={cn('container-wide relative flex items-center justify-between gap-4 transition-[height] duration-300', scrolled ? 'h-16' : 'h-20')}>
          <div className="flex h-full min-w-0 flex-1 items-center">
            <Link href="/" className="flex shrink-0 items-center gap-3 pr-2" aria-label="OAIC 2026 home">
              <Image
                src="/images/logo.png"
                alt="Odisha AI"
                width={163}
                height={200}
                className={cn('w-auto transition-[height] duration-300', scrolled ? 'h-12' : 'h-16')}
                priority
              />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-base font-semibold text-primary-950 xl:text-lg">OAIC 2026</span>
                <span className="text-[11px] font-medium text-primary-900/70 xl:text-xs">Odisha AI Conference</span>
              </span>
            </Link>
          <nav className="hidden h-full flex-1 items-stretch justify-center lg:flex" aria-label="Primary">
            {navConfig.map((item, index) => {
              const active = isItemActive(item, pathname);
              const hasChildren = !!item.children?.length;
              const expanded = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative flex items-center"
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
                        'relative flex h-full items-center gap-1 px-2 text-[13px] font-semibold transition-colors xl:px-3.5 xl:text-sm',
                        active ? 'text-primary-950' : 'text-primary-900 hover:text-brand-700',
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', expanded && 'rotate-180')} aria-hidden />
                      {active && <span className="absolute inset-x-2 bottom-0 h-[3px] rounded-t bg-brand-700 xl:inset-x-3.5" />}
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'relative flex h-full items-center px-2 text-[13px] font-semibold transition-colors xl:px-3.5 xl:text-sm',
                        active ? 'text-primary-950' : 'text-primary-900 hover:text-brand-700',
                      )}
                    >
                      {item.label}
                      {active && <span className="absolute inset-x-2 bottom-0 h-[3px] rounded-t bg-brand-700 xl:inset-x-3.5" />}
                    </Link>
                  )}

                  {hasChildren && expanded && (
                    <div className="animate-dropdown absolute left-0 top-full z-50 min-w-60 max-w-xs overflow-hidden rounded-b-lg border border-t-2 border-gray-200 border-t-brand-700 bg-white py-1.5 shadow-lg">
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
                  {index < navConfig.length - 1 && <span className="h-5 w-px bg-primary-200" aria-hidden />}
                </div>
              );
            })}
          </nav>
          </div>

          <button
            type="button"
            className="-mr-2 rounded-md p-2 text-primary-950 hover:bg-primary-100 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-x-0 bottom-0 top-0 -z-10 bg-gray-900/30 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <nav
              id="mobile-menu"
              aria-label="Mobile"
              className="animate-dropdown absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-b-2 border-brand-700 bg-white px-2 py-2 shadow-lg lg:hidden"
            >
              <div className="container-wide !px-2">
                {navConfig.map((item) => (
                  <MobileNavItem key={item.label} item={item} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
                ))}
              </div>
            </nav>
          </>
        )}
      </header>
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
