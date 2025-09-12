'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import HandwrittenTitle from './HandwrittenTitle';

const AboutSection = () => {
  const { t, language } = useLanguage();

  return (
    <section 
      id="about" 
      className="relative py-32"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-7">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <HandwrittenTitle
                text={`${t('about.title.primary')} ${t('about.title.secondary')}`}
                color="black"
                fontSize="text-5xl"
                className="mb-6"
              />
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                {(() => {
                  const mission = t('about.mission');
                  const highlight = t('about.mission.highlight');
                  const parts = mission.split(highlight);
                  
                  if (parts.length === 2) {
                    return (
                      <>
                        {parts[0]}
                        <span className="border-b-2 border-dotted border-black">{highlight}</span>
                        {parts[1]}
                      </>
                    );
                  }
                  return mission;
                })()}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('about.belief')}
              </p>
              <Link 
                href={`/${language}/about`}
                className="inline-flex items-center hover:opacity-80 font-semibold text-lg transition-all group"
                style={{ color: 'var(--color-primary)' }}
                scroll={false}
              >
                <span className="border-b-2 border-dotted group-hover:border-solid" style={{ borderColor: 'var(--color-primary)' }}>
                  {t('about.readmore')}
                </span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="/community.svg" 
                  alt="Community illustration"
                  className="w-full h-auto max-w-lg mx-auto"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;