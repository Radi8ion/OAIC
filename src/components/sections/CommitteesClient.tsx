'use client';

import { useState, useEffect, useRef } from 'react';
import { Building2 } from 'lucide-react';

interface Member {
  name: string;
  role?: string;
  institution?: string;
}

interface SectionData {
  id: string;
  title: string;
  members: Member[];
}

interface CommitteesClientProps {
  sections: SectionData[];
}

export default function CommitteesClient({ sections }: CommitteesClientProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const activeMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // ScrollSpy Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -75% 0px', // Trigger when section hits the upper area of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  // Scroll active item into view within the desktop sidebar
  useEffect(() => {
    if (activeLinkRef.current && sidebarRef.current) {
      const activeEl = activeLinkRef.current;
      const sidebar = sidebarRef.current;

      const activeRect = activeEl.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();

      if (activeRect.top < sidebarRect.top || activeRect.bottom > sidebarRect.bottom) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [activeSection]);

  // Scroll active item into view within the mobile horizontal index
  useEffect(() => {
    if (activeMobileLinkRef.current && mobileMenuRef.current) {
      const activeEl = activeMobileLinkRef.current;
      const mobileMenu = mobileMenuRef.current;

      const activeRect = activeEl.getBoundingClientRect();
      const menuRect = mobileMenu.getBoundingClientRect();

      if (activeRect.left < menuRect.left || activeRect.right > menuRect.right) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSection]);

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
      <aside
        ref={sidebarRef}
        className="no-scrollbar hidden max-h-[calc(100vh-7rem)] overflow-y-auto lg:sticky lg:top-24 lg:col-span-3 lg:block"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">On this page</p>
        <nav aria-label="Committees" className="border-l border-gray-200">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                ref={isActive ? activeLinkRef : null}
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                  isActive
                    ? 'border-brand-700 font-medium text-primary-950'
                    : 'border-transparent text-gray-600 hover:text-primary-950'
                }`}
              >
                {section.title}
              </a>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0 space-y-12 lg:col-span-9">
        <div className="lg:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Jump to</p>
          <div ref={mobileMenuRef} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  ref={isActive ? activeMobileLinkRef : null}
                  href={`#${section.id}`}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'border-primary-950 bg-primary-950 text-white hover:text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:text-primary-950'
                  }`}
                >
                  {section.title}
                </a>
              );
            })}
          </div>
        </div>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="border-b border-gray-200 pb-3 text-xl font-semibold md:text-2xl">{section.title}</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {section.members.map((member, i) => (
                <li key={`${member.name}-${i}`} className="surface flex flex-col p-4">
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  {member.role && <p className="mt-0.5 text-sm text-brand-700">{member.role}</p>}
                  {member.institution && (
                    <p className="mt-2 flex items-start gap-1.5 text-sm leading-snug text-gray-600">
                      <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden />
                      {member.institution}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
