import RulesPageClient from '@/components/pages/RulesPageClient';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ge' }
  ];
}

export default function RulesPage() {
  return <RulesPageClient />;
}