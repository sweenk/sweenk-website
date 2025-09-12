import TermsPageClient from '@/components/pages/TermsPageClient';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ge' }
  ];
}

export default function TermsPage() {
  return <TermsPageClient />;
}