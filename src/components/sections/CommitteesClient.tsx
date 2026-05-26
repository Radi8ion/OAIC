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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Sticky Sidebar Directory */}
      <aside
        ref={sidebarRef}
        className="lg:col-span-3 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hidden lg:block no-scrollbar scroll-smooth"
      >
        <h3 className="text-xs uppercase tracking-widest text-[#002147] font-extrabold mb-4 pb-2 border-b border-gray-100">
          Committee Index
        </h3>
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                ref={isActive ? activeLinkRef : null}
                href={`#${section.id}`}
                className={`block text-xs font-bold px-3 py-2 rounded-lg transition-all duration-200 border-l-2 ${
                  isActive
                    ? 'text-primary-700 bg-primary-50 border-l-primary-600 font-extrabold shadow-sm'
                    : 'text-gray-500 hover:text-primary-600 hover:bg-primary-50/30 border-l-transparent'
                }`}
              >
                {section.title}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Right Column: Committee Lists */}
      <main className="lg:col-span-9 space-y-16">
        {/* Mobile Index Quick-Scroll links */}
        <div className="lg:hidden bg-white p-4 rounded-xl border border-gray-100 mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-400 font-extrabold mb-3">
            Jump to Section
          </h3>
          <div 
            ref={mobileMenuRef}
            className="flex gap-2 overflow-x-auto pb-2 no-scrollbar whitespace-nowrap scroll-smooth"
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  ref={isActive ? activeMobileLinkRef : null}
                  href={`#${section.id}`}
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 border ${
                    isActive
                      ? 'bg-primary-600 text-white border-primary-600 font-bold shadow-sm'
                      : 'bg-gray-50 text-gray-600 hover:bg-primary-50 hover:text-primary-700 border-gray-100'
                  }`}
                >
                  {section.title}
                </a>
              );
            })}
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-1.5 h-8 bg-primary-600 rounded-full"></span>
              <h2 className="text-xl md:text-2xl font-serif font-black text-primary-950 tracking-tight">
                {section.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {section.members.map((member, i) => (
                <div
                  key={`${member.name}-${i}`}
                  className="group bg-white border border-gray-100 rounded-xl p-4 md:p-5 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col justify-between border-l-4 border-l-primary-950/80"
                >
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-primary-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    {member.role && (
                      <span className="inline-block bg-[#eaf2f8] text-[#1a5f7a] font-bold px-2 py-0.5 rounded text-[10px] md:text-xs tracking-wide">
                        {member.role}
                      </span>
                    )}
                  </div>
                  {member.institution && (
                    <div className="mt-3 pt-3 border-t border-gray-50 flex items-start gap-2 text-xs text-gray-500">
                      <Building2 className="w-3.5 h-3.5 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span className="font-medium text-gray-600 leading-relaxed">
                        {member.institution}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
