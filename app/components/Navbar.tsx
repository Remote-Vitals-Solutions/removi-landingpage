'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Product', href: '#product' },
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
            className="text-base font-semibold tracking-tight cursor-pointer bg-transparent border-none p-0"
            style={{ color: '#1d1d1f' }}
          >
            Removi
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
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
            ))}
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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-2.5 transition-opacity hover:opacity-60"
                style={{ color: '#1d1d1f' }}
              >
                {link.label}
              </a>
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
