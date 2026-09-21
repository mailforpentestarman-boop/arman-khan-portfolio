import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Terminal, FileText, ChevronRight, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'focus', 'skills', 'projects', 'journey', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Focus', href: '#focus', id: 'focus' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-lg p-1"
            aria-label="Md Arman Khan - Portfolio Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-950 to-slate-900 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono font-bold text-sm tracking-wider shadow-sm group-hover:border-sky-400/60 transition-colors">
              <span className="text-sky-400 font-semibold">{PORTFOLIO_DATA.personal.logoInitial}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-100 font-semibold tracking-tight text-base group-hover:text-sky-300 transition-colors">
                {PORTFOLIO_DATA.personal.fullName}
              </span>
              <span className="text-xs font-mono text-sky-400/80 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {PORTFOLIO_DATA.personal.title} <span className="text-slate-500">|</span> {PORTFOLIO_DATA.personal.organization}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-slate-800/60 p-1.5 rounded-full backdrop-blur-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: GitHub, LinkedIn, CV Button & Contact Quick Link */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/mailforpentestarman-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              title="GitHub Profile (@mailforpentestarman-boop)"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-arman-khan-pentester"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-sky-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              title="LinkedIn Profile (Md Arman Khan)"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCv}
              type="button"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              title="View & Download Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>CV</span>
            </button>
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-lg shadow-sm hover:shadow-sky-500/20 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>Connect</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCv}
              type="button"
              className="p-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
              title="View CV"
              aria-label="View CV"
            >
              <FileText className="w-4 h-4 text-sky-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="sm:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 mt-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 pb-1 border-b border-slate-800/80">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          {/* Social icons in mobile drawer */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2 px-1">
            <a
              href="https://github.com/mailforpentestarman-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 text-xs font-mono rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-2"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-arman-khan-pentester"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 text-xs font-mono rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 flex items-center justify-center gap-2"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="flex-1 py-2 px-3 text-xs font-medium text-center rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              Download CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 px-3 text-xs font-medium text-center rounded-lg bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center gap-1.5"
            >
              <span>Contact</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
