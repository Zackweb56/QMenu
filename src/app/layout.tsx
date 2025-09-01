import type { Metadata } from 'next';
import { getDictionary } from '@/lib/translations';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Literata, PT_Sans } from 'next/font/google';

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
  weight: ['400', '700'],
});

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lang: 'en' | 'fr' | 'ar' };
};

// This function is not directly used to generate metadata for this layout,
// but it's a good practice to keep it for generating metadata in child layouts/pages.
export async function generateMetadata({ params }: RootLayoutProps): Promise<Metadata> {
  const dict = getDictionary(params.lang);
  return {
    title: dict.restaurantName,
    description: dict.restaurantSubtitle,
  };
}

export default function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <html
      lang={params.lang ?? 'en'}
      dir={params.lang === 'ar' ? 'rtl' : 'ltr'}
      className={`${literata.variable} ${ptSans.variable}`}
    >
      <body className='font-body antialiased'>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
