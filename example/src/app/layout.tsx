import type { Metadata } from 'next';
import { Inter, Nothing_You_Could_Do, Noto_Sans_Georgian, Bebas_Neue } from 'next/font/google';
import './globals.css';
import '@/styles/form.css';

const inter = Inter({ subsets: ['latin'] });
const nothingYouCouldDo = Nothing_You_Could_Do({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nothing'
});
const notoSansGeorgian = Noto_Sans_Georgian({
  weight: ['400', '700'],
  subsets: ['georgian'],
  variable: '--font-noto-georgian'
});
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

export const metadata: Metadata = {
  title: 'DOTS.ge - Online Community',
  description: 'Online community for entrepreneurs, engineers, investors, and designers who love tech and innovations',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${nothingYouCouldDo.variable} ${notoSansGeorgian.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className="geo antialiased px-4 md:px-0" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}