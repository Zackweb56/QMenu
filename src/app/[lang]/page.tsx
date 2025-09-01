
import { getDictionary } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';
import { MenuSection } from '@/components/menu-section';
import { Footer } from '@/components/footer';
import { MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type MenuPageProps = {
  params: { lang: 'en' | 'fr' | 'ar' };
};

export default async function MenuPage({ params: { lang } }: MenuPageProps) {
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left rtl:md:text-right">
              <Logo className="w-16 h-16 text-primary" />
              <div>
                <h1 className="text-2xl md:text-3xl font-headline font-bold text-primary">{dict.restaurantName}</h1>
                <p className="text-muted-foreground mt-1">{dict.restaurantSubtitle}</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <LanguageSwitcher lang={lang} dictionary={dict.header} />
              <div className="text-sm text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{dict.address}</span>
              </div>
              <div className="text-sm text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>{dict.phone}</span>
              </div>
            </div>
          </div>
          <Separator className="mt-6" />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4">
        <MenuSection dictionary={dict.menu} lang={lang} />
      </main>

      <Footer copyrightText={dict.footer.copyright} />
    </div>
  );
}
