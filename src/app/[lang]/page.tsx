
import { getTranslations } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';
import { MenuSection } from '@/components/menu-section';
import { Footer } from '@/components/footer';
import { MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ShoppingCartDrawer } from '@/components/shopping-cart-drawer';
import Image from 'next/image';

type MenuPageProps = {
  params: { lang: 'en' | 'fr' | 'ar' };
};

export default async function MenuPage({ params: { lang } }: MenuPageProps) {
  const dict = getTranslations(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <LanguageSwitcher lang={lang} dictionary={dict.header} />
          <ShoppingCartDrawer 
            dictionary={dict.cart} 
            restaurantName={dict.restaurantName}
            address={dict.address}
            phone={dict.phone}
          />
        </div>
      </header>

      <section className="relative py-16 md:py-24 text-center">
        <div className="absolute inset-0">
          <Image 
            src="https://picsum.photos/1200/800" 
            alt="Restaurant background"
            fill
            className="object-cover"
            data-ai-hint="restaurant interior"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto bg-card-background p-6 md:p-8 rounded-xl border border-border/20 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col items-center gap-4">
                    <Logo className="w-24 h-24 text-primary" />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{dict.restaurantName}</h1>
                        <p className="text-foreground/90 mt-2 text-lg">{dict.restaurantSubtitle}</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2 mt-4 text-foreground/80">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{dict.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-accent" />
                            <span>{dict.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4">
        <Separator />
        <MenuSection dictionary={dict.menu} cartDictionary={dict.cart} lang={lang} />
      </main>

      <Footer 
        copyrightText={dict.footer.copyright}
        developerText={dict.footer.developer}
        contactText={dict.footer.contact}
        contactUrl={dict.footer.contactUrl}
      />
    </div>
  );
}
