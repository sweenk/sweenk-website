import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhySection from '@/components/WhySection';
import ManifestoSection from '@/components/ManifestoSection';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ge' }
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ManifestoSection />
      <WhySection />
    </>
  );
}