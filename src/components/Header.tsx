'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/translations';

const navItems = [
  { id: 'hero', label: 'home' },
  { id: 'features', label: 'features' },
  { id: 'dashboard', label: 'dashboard' },
  { id: 'pricing', label: 'pricing' },
  { id: 'testimonials', label: 'testimonials' },
  { id: 'contact', label: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, language, toggleTheme, toggleLanguage } = useAppStore();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 50 C50 30, 30 20, 20 35 C10 50, 30 70, 50 50 C70 30, 90 50, 80 65 C70 80, 50 70, 50 50"
                    fill="none"
                    stroke="url(#infinityGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  InfinityAlgo
                </span>
                <span className="text-xs block text-slate-500 -mt-1">Academy</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t.nav[item.label as keyof typeof t.nav]}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" onClick={toggleLanguage} className="hidden md:flex">
                <Globe className="w-4 h-4" />
                <span className="ml-1 text-xs">{language.toUpperCase()}</span>
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>

              <Button
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25"
                onClick={() => window.open('https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a', '_blank')}
              >
                {t.nav.getStarted}
              </Button>

              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-x-0 top-16 z-40 lg:hidden">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 shadow-xl">
              <nav className="max-w-7xl mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    {t.nav[item.label as keyof typeof t.nav]}
                  </button>
                ))}
                <div className="px-4 pt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" onClick={() => window.open('https://infinityalgoacademy.net/checkout/?fct_cart_hash=9b96cc6397bc86b43dce91f64ff5f74a', '_blank')}>
                    {t.nav.getStarted}
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
