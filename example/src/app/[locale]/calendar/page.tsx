import CalendarPageClient from '@/components/pages/CalendarPageClient';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ge' }
  ];
}

export default function CalendarPage() {
  return <CalendarPageClient />;
}