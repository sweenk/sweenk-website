'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const switchToLocale = (locale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    const newPath = `/${locale}${currentPath ? `/${currentPath}` : ''}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchToLocale('en')}
        className={`px-4 py-1.5 rounded-full border transition-all ${
          language === 'en' 
            ? 'bg-purple-50' 
            : 'border-gray-300 text-gray-600 hover:border-gray-400'
        }`}
        style={language === 'en' ? { 
          borderColor: 'var(--color-primary)',
          color: 'var(--color-primary)'
        } : undefined}
      >
        EN
      </button>
      <button
        onClick={() => switchToLocale('ge')}
        className={`px-4 py-1.5 rounded-full border transition-all ${
          language === 'ge' 
            ? 'bg-purple-50' 
            : 'border-gray-300 text-gray-600 hover:border-gray-400'
        }`}
        style={language === 'ge' ? { 
          borderColor: 'var(--color-primary)',
          color: 'var(--color-primary)'
        } : undefined}
      >
        GE
      </button>
    </div>
  );
};

export default LanguageSwitcher;