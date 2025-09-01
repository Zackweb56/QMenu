
import { getDictionary } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';
import { MenuSection } from '@/components/menu-section';
import { Footer } from '@/components/footer';
import { MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ShoppingCartDrawer } from '@/components/shopping-cart-drawer';

type MenuPageProps = {
  params: { lang: 'en' | 'fr' | 'ar' };
};

export default async function MenuPage({ params: { lang } }: MenuPageProps) {
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 md:flex-none">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-center md:text-left rtl:md:text-right">
                <Logo className="w-16 h-16 text-primary rounded-full border-2 border-primary" />
                <div className="hidden md:block">
                  <h1 className="text-3xl font-headline font-bold text-primary">{dict.restaurantName}</h1>
                  <p className="text-muted-foreground mt-1">{dict.restaurantSubtitle}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 md:flex-none flex justify-center md:justify-end">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-4">
                  <LanguageSwitcher lang={lang} dictionary={dict.header} />
                  <ShoppingCartDrawer dictionary={dict.cart} />
                </div>
                <div className="hidden md:flex text-sm text-foreground items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{dict.address}</span>
                </div>
                <div className="hidden md:flex text-sm text-foreground items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>{dict.phone}</span>
                </div>
              </div>
            </div>
          </div>
           <div className="md:hidden flex flex-col items-center gap-2 mt-4 text-center">
             <h1 className="text-2xl font-headline font-bold text-primary">{dict.restaurantName}</h1>
              <p className="text-muted-foreground text-sm">{dict.restaurantSubtitle}</p>
              <div className="text-sm text-foreground flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{dict.address}</span>
              </div>
              <div className="text-sm text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>{dict.phone}</span>
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
