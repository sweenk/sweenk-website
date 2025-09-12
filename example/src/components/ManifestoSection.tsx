'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import HandwrittenTitle from './HandwrittenTitle';

const ManifestoSection = () => {
  const { t, language } = useLanguage();

  const manifestoPoints = [
    { en: "We Create", ge: "ჩვენ ვქმნით" },
    { en: "We Help", ge: "ჩვენ ვეხმარებით" },
    { en: "We Trust", ge: "ჩვენ ვენდობით" },
    { en: "We Share", ge: "ჩვენ ვიზიარებთ" },
    { en: "We Care", ge: "ჩვენ ვზრუნავთ" },
    { en: "We Stand for Light", ge: "ჩვენ ვდგავართ სინათლის მხარეს" },
    { en: "We Persist", ge: "ჩვენ ვაგრძელებთ" },
    { en: "We Evolve", ge: "ჩვენ ვვითარდებით" }
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-7">
        <div className="text-center mb-12">
          <HandwrittenTitle
            text={`${t('manifesto.title.primary')} ${t('manifesto.title.secondary')}`}
            fontSize="text-5xl"
            className="mb-6"
          />
          <p className="text-lg font-medium text-gray-700 mt-8 max-w-4xl mx-auto">
            {language === 'en' 
              ? "WE ORGANIZED A SPACE → WHERE PEOPLE TRUST → WHERE THE UNUSUAL AND NEW ARE ACCEPTED → WHERE PEOPLE SUPPORT EACH OTHER → WHERE PEOPLE MAKE MISTAKES AND GROW TOGETHER"
              : "ჩვენ შევქმენით სივრცე → სადაც ენდობიან → სადაც იღებენ უჩვეულოსა და ახალს → სადაც მხარს უჭერენ → სადაც შეცდომებს უშვებენ და ერთად იზრდებიან"
            }
          </p>
        </div>

        {/* Manifesto tags */}
        <div className="flex flex-wrap justify-center mb-12 max-w-5xl mx-auto">
          {manifestoPoints.map((point, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 px-1 py-1 mb-4 ml-3 first:ml-0 bg-white/90 backdrop-blur-sm rounded-full border shadow-sm"
              style={{ borderColor: 'var(--color-primary)' }}
            >
              <span 
                className="text-sm font-bold text-white rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {index + 1}
              </span>
              <span className="text-base font-medium pr-3" style={{ color: 'var(--color-primary)' }}>
                {point[language]}
              </span>
            </div>
          ))}
        </div>

        {/* Read Full Manifesto Link */}
        <div className="text-center">
          <Link 
            href={`/${language}/manifesto`}
            className="inline-block"
            scroll={false}
          >
            <span className="text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors">
              {language === 'en' ? 'Read Full Manifesto →' : 'სრული მანიფესტის ნახვა →'}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;