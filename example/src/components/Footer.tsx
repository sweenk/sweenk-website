'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const footerLinks = {
    navigation: [
      { name: t('nav.overview'), href: `/${language}` },
      { name: t('nav.about'), href: `/${language}/about` },
      { name: t('nav.manifesto'), href: `/${language}/manifesto` },
      { name: t('nav.rules'), href: `/${language}/rules` },
      { name: t('nav.calendar'), href: `/${language}/calendar` },
    ],
    support: [
      { name: t('nav.applicationform'), href: `/${language}/apply` },
      { name: t('nav.terms'), href: `/${language}/terms` },
      { name: t('nav.faq'), href: `/${language}/faq` },
    ],
  };

  return (
    <footer className="bg-black/80 backdrop-blur-lg text-white relative mt-20">
      <div className="mx-auto sm:px-7 px-4 max-w-screen-xl py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="space-y-8 lg:max-w-md">
            <Link 
              href="/"
              className="flex items-baseline"
            >
              <span className="text-2xl font-bold text-white">DOTS</span>
              <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>.</span>
              <span className="text-2xl font-light text-gray-400">GE</span>
            </Link>
            <p className="text-gray-400 text-base">
              unite people to build a new entrepreneurial culture and empower a generation of creators for the new era
            </p>
            <Link 
              href={`/${language}/apply`}
              className="inline-block px-6 py-2.5 text-white font-semibold rounded-full hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-0.5 duration-300 transition-all bg-gray-900"
            >
              {t('hero.cta')}
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {currentYear} dots.ge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;