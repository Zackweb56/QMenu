import type { Metadata } from 'next';
import { getTranslations } from '@/lib/translations';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Literata, PT_Sans, Roboto_Mono } from 'next/font/google';
import { CartProvider } from '@/context/cart-context';

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
  weight: ['400', '700'],
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

type LangLayoutProps = {
  children: React.ReactNode;
  params: { lang: 'en' | 'fr' | 'ar' };
};

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const dict = getTranslations(params.lang);
  return {
    title: dict.restaurantName,
    description: dict.restaurantSubtitle,
  };
}

export default function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  return (
    <html
      lang={params.lang ?? 'en'}
      dir={params.lang === 'ar' ? 'rtl' : 'ltr'}
      className={`${literata.variable} ${ptSans.variable} ${robotoMono.variable}`}
    >
      <body className='bg-background text-foreground font-body antialiased'>
        <CartProvider>
          {children}
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
