import AboutPageClient from '@/components/pages/AboutPageClient';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ge' }
  ];
}

export default function AboutPage() {
  return <AboutPageClient />;
}