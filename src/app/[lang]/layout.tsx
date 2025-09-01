
import type { Metadata } from 'next';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";
import { getDictionary } from '@/lib/translations';

type LangLayoutProps = {
  children: React.ReactNode;
  params: { lang: 'en' | 'fr' | 'ar' };
};

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const dict = getDictionary(params.lang);
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
    <html lang={params.lang} dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className="bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
