'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

interface LanguageSwitcherProps {
  variant?: 'default' | 'flag' | 'dropdown' | 'toggle' | 'minimal';
}

const LanguageSwitcherAlt = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const switchToLocale = (locale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    const newPath = `/${locale}${currentPath ? `/${currentPath}` : ''}`;
    router.push(newPath);
  };

  // Style 1: Default (current style)
  if (variant === 'default') {
    return (
      <div className="flex gap-2">
        <button
          onClick={() => switchToLocale('en')}
          className={`px-3 py-1 rounded transition-colors ${
            language === 'en' 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchToLocale('ge')}
          className={`px-3 py-1 rounded transition-colors ${
            language === 'ge' 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          GE
        </button>
      </div>
    );
  }

  // Style 2: With flags
  if (variant === 'flag') {
    return (
      <div className="flex gap-2">
        <button
          onClick={() => switchToLocale('en')}
          className={`flex items-center gap-1 px-3 py-1 rounded transition-all ${
            language === 'en' 
              ? 'bg-black text-white scale-105' 
              : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
          }`}
        >
          <span className="text-base">🇬🇧</span>
          <span className="text-sm font-medium">EN</span>
        </button>
        <button
          onClick={() => switchToLocale('ge')}
          className={`flex items-center gap-1 px-3 py-1 rounded transition-all ${
            language === 'ge' 
              ? 'bg-black text-white scale-105' 
              : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
          }`}
        >
          <span className="text-base">🇬🇪</span>
          <span className="text-sm font-medium">GE</span>
        </button>
      </div>
    );
  }

  // Style 3: Dropdown
  if (variant === 'dropdown') {
    return (
      <select
        value={language}
        onChange={(e) => switchToLocale(e.target.value)}
        className="px-4 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer"
      >
        <option value="en">🇬🇧 English</option>
        <option value="ge">🇬🇪 ქართული</option>
      </select>
    );
  }

  // Style 4: Toggle switch
  if (variant === 'toggle') {
    return (
      <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
        <button
          onClick={() => switchToLocale('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchToLocale('ge')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            language === 'ge'
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          GE
        </button>
      </div>
    );
  }

  // Style 5: Minimal with underline
  if (variant === 'minimal') {
    return (
      <div className="flex items-center gap-3">
        <button
          onClick={() => switchToLocale('en')}
          className={`text-sm font-medium transition-all relative ${
            language === 'en'
              ? 'text-black'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          EN
          {language === 'en' && (
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"></span>
          )}
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => switchToLocale('ge')}
          className={`text-sm font-medium transition-all relative ${
            language === 'ge'
              ? 'text-black'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          GE
          {language === 'ge' && (
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"></span>
          )}
        </button>
      </div>
    );
  }

  return null;
};

export default LanguageSwitcherAlt;