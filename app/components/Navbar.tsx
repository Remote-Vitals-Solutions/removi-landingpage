'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import wordmark from '../../public/logo-wordmark.png';
import { applications } from '../applications';

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; description: string; href: string }[];
};

const links: NavLink[] = [
  { label: 'Product', href: '#product' },
  {
    label: 'Applications',
    href: '#applications',
    children: applications.map((app) => ({
      label: app.navLabel,
      description: app.navDescription,
      href: `#${app.id}`,
    })),
  },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
  { label: 'News', href: '#news' },
  { label: 'Partners', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: solid ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0)',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(12px)' : 'none',
        borderBottom: solid ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer bg-transparent border-none p-0"
            aria-label="Removi — back to top"
          >
            <Image src={wordmark} alt="Removi" className="h-8 w-auto" loading="eager" />
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <a
                    href={link.href}
                    aria-haspopup="true"
                    className="text-sm font-medium transition-colors flex items-center gap-1"
                    style={{ color: '#424245' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#1d1d1f')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#424245')}
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 12 12"
                      className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 4.5 6 7.5 9 4.5" />
                    </svg>
                  </a>

                  {/* Dropdown: opens on hover, and on keyboard focus */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div
                      className="w-72 bg-white rounded-2xl p-2"
                      style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.06)' }}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={(e) => e.currentTarget.blur()}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#f5f5f7]"
                        >
                          <span className="block text-sm font-medium" style={{ color: '#1d1d1f' }}>
                            {child.label}
                          </span>
                          <span className="block text-xs mt-0.5" style={{ color: '#6e6e73' }}>
                            {child.description}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: '#424245' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1d1d1f')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#424245')}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#contact"
              className="text-sm font-medium px-5 py-2 rounded-md text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#27B9B6' }}
            >
              Get in touch
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-2 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: '#1d1d1f', transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: '#1d1d1f', opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: '#1d1d1f', transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-1 pb-4 pt-1 border-t border-black/5">
            {links.map((link) => (
              <div key={link.href} className="flex flex-col">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium py-2.5 transition-opacity hover:opacity-60"
                  style={{ color: '#1d1d1f' }}
                >
                  {link.label}
                </a>
                {link.children?.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm py-2 pl-4 transition-opacity hover:opacity-60"
                    style={{ color: '#6e6e73' }}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-sm font-medium px-5 py-2.5 rounded-md text-white text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#27B9B6' }}
            >
              Get in touch
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
