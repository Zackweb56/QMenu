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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'fr' | 'ar' };
}) {
  return (
    <html 
      lang={params?.lang ?? "en"} 
      dir={params?.lang === 'ar' ? 'rtl' : 'ltr'} 
      className={`${literata.variable} ${ptSans.variable}`}
    >
      <body className='font-body antialiased'>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
