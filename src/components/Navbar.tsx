import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';
import { SoundAmbience } from './SoundAmbience';

interface NavbarProps {
  onOpenEnquiry: (program?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateClock = () => {
      const now = new Date();
      // Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setIstTime(now.toLocaleTimeString('en-IN', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Institute', href: '#about', badge: '1959' },
    { label: 'Departments', href: '#departments' },
    { label: 'ECE Hub', href: '#ece', highlight: true },
    { label: 'Campus Tour', href: '#campus' },
    { label: 'Cutoff Predictor', href: '#predictor' },
    { label: 'Placements', href: '#placements' },
    { label: 'Bulletins', href: '#news' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0600]/92 backdrop-blur-md border-b border-[#e8a020]/20 py-2.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#0a0600]/90 via-[#0a0600]/60 to-transparent py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#top" className="flex items-center gap-3.5 group text-left">
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 bg-gradient-to-br from-[#c8560a] to-[#e8a020] clip-tara shadow-[0_0_15px_rgba(232,160,32,0.6)] group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#e8a020] clip-tara blur-sm opacity-40 group-hover:opacity-80 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#f2e8d5] group-hover:text-[#e8a020] transition-colors">
                  NIT WARANGAL
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-mono-code bg-[#c8560a]/20 border border-[#c8560a]/50 text-[#e8a020] rounded">
                  EST. 1959
                </span>
              </div>
              <p className="text-[10px] font-dev text-stone-400 tracking-wide line-clamp-1">
                राष्ट्रीय प्रौद्योगिकी संस्थान, वरंगल · Institute of National Importance
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-mono-code uppercase tracking-wider transition-colors duration-200 rounded-md ${
                  link.highlight
                    ? 'text-[#e8a020] font-semibold hover:bg-[#e8a020]/10 border border-[#e8a020]/30'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1 text-[9px] text-[#e8a020]/80">·{link.badge}</span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Live IST clock */}
            <div className="hidden sm:flex flex-col text-right font-mono-code text-[10px] leading-tight text-stone-400 pl-2 pr-1 border-r border-white/10">
              <span className="text-[#e8a020] font-medium">{istTime} IST</span>
              <span className="text-[9px] opacity-70">Warangal (TS)</span>
            </div>

            {/* Sacred Ambience */}
            <SoundAmbience />

            {/* Admissions Apply CTA */}
            <button
              id="header-apply-button"
              onClick={() => onOpenEnquiry()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code uppercase tracking-wider bg-gradient-to-r from-[#c8560a] to-[#e8a020] text-black font-bold rounded shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Admissions</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#e8a020]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="space-y-4">
            <div className="pb-4 border-b border-white/10 flex items-center justify-between text-xs font-mono-code text-stone-400">
              <span>WARANGAL CAMPUS: {istTime} IST</span>
              <span className="text-[#e8a020]">NIRF TOP 10 NITs</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-lg border border-white/5 hover:border-[#e8a020]/40 text-base font-mono-code uppercase text-[#f2e8d5] hover:text-[#e8a020] bg-white/[0.02] hover:bg-[#e8a020]/5 transition-all"
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <Sparkles className="w-4 h-4 text-[#e8a020]" />}
                    {link.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 px-4 rounded bg-gradient-to-r from-[#c8560a] to-[#e8a020] text-black font-mono-code font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <GraduationCap className="w-4 h-4" />
              Apply for Admissions 2025-26
            </button>
            <p className="text-center text-xs font-dev text-stone-500">
              योगः कर्मसु कौशलम् · Excellence in all endeavours
            </p>
          </div>
        </div>
      )}
    </>
  );
};
