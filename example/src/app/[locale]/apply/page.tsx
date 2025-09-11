import ApplicationPageClient from '@/components/pages/ApplicationPageClient';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ge' }
  ];
}

export default function ApplicationPage() {
  return <ApplicationPageClient />;
}