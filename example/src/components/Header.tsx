'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Menu items array for consistency
  const menuItems = [
    { key: 'nav.overview', href: `/${language}` },
    { key: 'nav.about', href: `/${language}/about` },
    { key: 'nav.manifesto', href: `/${language}/manifesto` },
    { key: 'nav.rules', href: `/${language}/rules` },
    { key: 'nav.calendar', href: `/${language}/calendar` },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto sm:px-7 px-4 max-w-screen-xl py-6">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-baseline"
          >
            <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-gray-800'}`}>DOTS</span>
            <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>.</span>
            <span className={`text-2xl font-light transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-700'}`}>GE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">
            {menuItems.map((item) => (
              <Link 
                key={item.key}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'font-semibold' : ''}`}
                style={{ color: pathname === item.href ? 'var(--color-primary)' : undefined }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          
          {/* Mobile/Tablet Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <i className="bi bi-x-lg text-2xl"></i>
            ) : (
              <i className="bi bi-list text-2xl"></i>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={toggleMobileMenu}
          />
          
          {/* Slide-in Menu */}
          <div className={`fixed right-0 top-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b">
                <Link 
                  href="/"
                  className="flex items-baseline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-2xl font-bold text-black">DOTS</span>
                  <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>.</span>
                  <span className="text-2xl font-light text-gray-700">GE</span>
                </Link>
                
                <div className="flex items-center gap-3">
                  <LanguageSwitcher />
                  
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <i className="bi bi-x-lg text-2xl"></i>
                  </button>
                </div>
              </div>
            
            {/* Mobile Menu Items */}
            <nav className="flex-1 overflow-y-auto px-4 sm:px-7 py-8">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`block text-xl font-medium py-3 px-4 rounded-lg transition-colors ${
                      pathname === item.href 
                        ? 'bg-purple-50 text-purple-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
              
              {/* Apply Button in Mobile Menu */}
              <div className="mt-8 px-4">
                <Link
                  href={`/${language}/apply`}
                  className="block w-full max-w-sm text-center px-6 py-3 text-white font-semibold rounded-full hover:shadow-lg transition-all"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('hero.cta')}
                </Link>
              </div>
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="border-t px-4 sm:px-7 py-6">
              <div className="text-center text-sm text-gray-500">
                © 2024 DOTS.GE
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;