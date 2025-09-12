import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollToTop from '@/components/ScrollToTop';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <LanguageProvider initialLocale={locale as 'en' | 'ge'}>
      <ScrollToTop />
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}