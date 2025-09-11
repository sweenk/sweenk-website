import ManifestoPageClient from '@/components/pages/ManifestoPageClient';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ge' }
  ];
}

export default function ManifestoPage() {
  return <ManifestoPageClient />;
}