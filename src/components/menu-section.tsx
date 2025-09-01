
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
import { Soup, UtensilsCrossed, Cake, GlassWater } from 'lucide-react';
import type { Translations, MenuItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { MenuItemModal } from './menu-item-modal';

type MenuSectionProps = {
  dictionary: Translations['menu'];
  lang: 'en' | 'fr' | 'ar';
};

const icons = {
  starters: <Soup className="w-5 h-5" />,
  main_course: <UtensilsCrossed className="w-5 h-5" />,
  desserts: <Cake className="w-5 h-5" />,
  drinks: <GlassWater className="w-5 h-5" />,
};

function MenuItemDisplay({ item, lang, onSelect, dictionary }: { item: MenuItem; lang: string; onSelect: () => void; dictionary: Translations['menu'] }) {
  const hasOptions = !!item.sizes || !!item.addOns;

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
      <div className="flex-grow">
        <div className="flex items-baseline">
            <h4 className="font-headline text-base md:text-lg text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
            {item.price && (
              <>
                <span className="flex-grow border-b-2 border-dotted border-border/50 mx-2"></span>
                <span className={cn("text-base md:text-lg font-headline font-semibold text-primary whitespace-nowrap", lang === 'ar' ? 'ps-2' : 'pe-2')}>
                  {item.price}
                </span>
              </>
            )}
        </div>
        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
        
        {hasOptions && (
           <Badge variant="outline" className="mt-2">{dictionary.details_badge}</Badge>
        )}
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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {categories.map((key) => (
              <TabsTrigger key={key} value={key} className="py-2.5 flex items-center gap-2 text-sm md:text-base flex-wrap justify-center">
                 {icons[key as keyof typeof icons]}
                {dictionary.categories[key]}
              </TabsTrigger>
            ))}
          </TabsList>
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
        lang={lang}
        dictionary={{ extras_question: dictionary.extras_question }}
      />
    </section>
  );
}
