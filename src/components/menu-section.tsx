
'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Soup, UtensilsCrossed, Cake, GlassWater, PlusCircle } from 'lucide-react';
import type { Translations, MenuItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { MenuItemModal } from './menu-item-modal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useCart } from '@/context/cart-context';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type MenuSectionProps = {
  dictionary: Translations['menu'] & Translations['cart'];
  lang: 'en' | 'fr' | 'ar';
};

const icons = {
  starters: <Soup className="w-5 h-5" />,
  main_course: <UtensilsCrossed className="w-5 h-5" />,
  desserts: <Cake className="w-5 h-5" />,
  drinks: <GlassWater className="w-5 h-5" />,
};

function MenuItemDisplay({ item, lang, onSelect, dictionary }: { item: MenuItem; lang: string; onSelect: () => void; dictionary: Translations['menu'] & Translations['cart'] }) {
  const { addItem } = useCart();
  const isMobile = useIsMobile();
  const hasOptions = !!item.sizes || !!item.addOns;

  const handleDirectAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasOptions) {
      onSelect();
    } else {
      addItem({
        menuItem: item,
        quantity: 1,
        unitPrice: item.price!,
      });
    }
  };
  
  return (
    <div className="py-6 flex gap-4 items-start cursor-pointer group" onClick={onSelect}>
      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
        <Image
          src={Array.isArray(item.imageUrl) ? item.imageUrl[0] : item.imageUrl}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-lg object-cover w-16 h-16 md:w-20 md:h-20 border-2 border-primary/20 shadow-sm group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={item.imageHint}
        />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="flex justify-between items-baseline">
            <h4 className="font-headline text-lg md:text-xl text-foreground group-hover:text-primary transition-colors truncate">{item.name}</h4>
            {item.price && (
                <span className={cn("text-base md:text-lg font-headline font-semibold text-primary whitespace-nowrap", lang === 'ar' ? 'ps-2' : 'pe-2')}>
                  {item.price} {dictionary.currency}
                </span>
            )}
        </div>
        <p className="text-muted-foreground text-sm mt-1 truncate">{item.description}</p>
        
        {hasOptions && (
           <Badge variant="outline" className="mt-2">{dictionary.details_badge}</Badge>
        )}
      </div>
       <div className="flex items-center h-full ms-2">
        <Button size={isMobile ? "icon" : "default"} variant="ghost" className="rounded-full w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 group-hover:bg-primary/10" onClick={handleDirectAdd}>
          <PlusCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"/>
          <span className="hidden md:inline ms-2 font-semibold">{dictionary.add_to_order_button}</span>
        </Button>
      </div>
    </div>
  );
}

export function MenuSection({ dictionary, lang }: MenuSectionProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = Object.keys(dictionary.items) as (keyof typeof dictionary.items)[];

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-12 md:py-16">
      <div className='container mx-auto px-4'>
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-8">
          {dictionary.title}
        </h2>
        <Tabs defaultValue="starters" className="w-full">
          <div className="relative flex justify-center">
            <Carousel
              opts={{
                align: "center",
                dragFree: true,
              }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl"
            >
              <CarouselContent>
                  <TabsList className="inline-flex h-auto">
                    {categories.map((key) => (
                      <CarouselItem key={key} className="basis-auto">
                        <TabsTrigger value={key} className="py-2.5 flex items-center gap-2 text-sm md:text-base">
                           {icons[key as keyof typeof icons]}
                           <span className='hidden md:inline'>{dictionary.categories[key]}</span>
                        </TabsTrigger>
                      </CarouselItem>
                    ))}
                  </TabsList>
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>

          {categories.map((categoryKey) => (
            <TabsContent key={categoryKey} value={categoryKey}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 border-t border-border/70 mt-4">
                {Object.values(dictionary.items[categoryKey]).map((item, index) => (
                   <MenuItemDisplay 
                      key={index} 
                      item={item} 
                      lang={lang}
                      dictionary={dictionary}
                      onSelect={() => handleItemClick(item)}
                    />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <MenuItemModal 
        isOpen={!!selectedItem} 
        onClose={closeModal} 
        item={selectedItem} 
        dictionary={dictionary}
      />
    </section>
  );
}
