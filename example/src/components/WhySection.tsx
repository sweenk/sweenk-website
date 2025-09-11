'use client';

import HandwrittenTitle from './HandwrittenTitle';
import { useLanguage } from '@/contexts/LanguageContext';

const WhySection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <i className="bi bi-people-fill text-2xl"></i>,
      titleKey: 'why.network.title',
      descriptionKey: 'why.network.description'
    },
    {
      icon: <i className="bi bi-chat-dots-fill text-2xl"></i>,
      titleKey: 'why.feedback.title',
      descriptionKey: 'why.feedback.description'
    },
    {
      icon: <i className="bi bi-rocket-takeoff-fill text-2xl"></i>,
      titleKey: 'why.adopters.title',
      descriptionKey: 'why.adopters.description'
    },
    {
      icon: <i className="bi bi-arrow-left-right text-2xl"></i>,
      titleKey: 'why.exchange.title',
      descriptionKey: 'why.exchange.description'
    },
    {
      icon: <i className="bi bi-heart-fill text-2xl"></i>,
      titleKey: 'why.support.title',
      descriptionKey: 'why.support.description'
    },
    {
      icon: <i className="bi bi-person-plus-fill text-2xl"></i>,
      titleKey: 'why.cofounders.title',
      descriptionKey: 'why.cofounders.description'
    },
    {
      icon: <i className="bi bi-lightbulb-fill text-2xl"></i>,
      titleKey: 'why.knowledge.title',
      descriptionKey: 'why.knowledge.description'
    },
    {
      icon: <i className="bi bi-hammer text-2xl"></i>,
      titleKey: 'why.build.title',
      descriptionKey: 'why.build.description'
    }
  ];
  return (
    <section id="why" className="py-24 relative">
      <div className="mx-auto sm:px-7 px-4 max-w-screen-xl relative">
        <div className="text-center mb-16">
          <HandwrittenTitle
            text={`${t('why.title.primary')} ${t('why.title.secondary')}`}
            fontSize="text-5xl"
            className="mb-6"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/40"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 mb-6 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--color-primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;