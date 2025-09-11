'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from "next/link";
import SectionTitle from './SectionTitle';

const HeroSection = () => {
  const { t, language } = useLanguage();
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center py-32"
    >
      <div className="mx-auto sm:px-7 px-4 max-w-screen-lg w-full">
        <div className="text-center" data-aos="fade-up" data-aos-delay="50">
          <SectionTitle
            primary={t("hero.title.primary")}
            secondary={t("hero.title.secondary")}
            primaryColor="var(--color-primary)"
            fontSize="hero-title"
            className="mb-6"
          />
          <p className="hero-subtitle text-gray-700">
            {t("hero.subtitle")}{" "}
            <i
              className="bi bi-heart-fill"
              style={{ fontSize: "0.7em", color: "#ef4444" }}
            ></i>{" "}
            {t("hero.subtitle.tech")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href={`/${language}/apply`}
              className="inline-block text-white rounded-full hover:shadow-xl transform hover:-translate-y-1 duration-300 transition-all px-10 py-3 text-lg font-semibold"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {t("hero.cta")} <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;