'use client';

import SectionTitle from './SectionTitle';
import CheckmarkList from './CheckmarkList';
import { useLanguage } from '@/contexts/LanguageContext';

const ValuesSection = () => {
  const { t } = useLanguage();
  
  const values = [
    "Ideas are shared openly without fear of judgment or theft",
    "Failures are celebrated as stepping stones to success",
    "Help is given freely without keeping score",
    "Success is measured by impact, not just profit",
    "Everyone has something to teach and something to learn"
  ];

  return (
    <section id="values" className="py-24 relative">
      <div className="mx-auto sm:px-7 px-4 max-w-screen-xl relative">
        <div className="text-center mb-16">
          <SectionTitle
            primary={t('values.title.primary')}
            secondary={t('values.title.secondary')}
            primaryColor="var(--color-primary)"
            fontSize="text-5xl"
            className="mb-6"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our community and shape our culture
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
            <CheckmarkList items={values} className="text-lg space-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;