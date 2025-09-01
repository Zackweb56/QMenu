
'use client';
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

function MenuItemDisplay({ item, lang }: { item: MenuItem; lang: string }) {
  return (
    <div className="py-6 flex gap-4 items-start relative">
      <div className="w-24 h-24 flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={100}
          height={100}
          className="rounded-full object-cover w-24 h-24 border-2 border-primary/20 shadow-sm"
          data-ai-hint={item.imageHint}
        />
      </div>
      <div className="flex-grow">
        <h4 className="font-headline text-lg text-foreground">{item.name}</h4>
        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
        
        {item.sizes && (
          <div className="text-sm text-foreground mt-2 flex gap-4">
             {Object.entries(item.sizes).map(([size, price]) => (
              <span key={size}>{size}: {price}</span>
            ))}
          </div>
        )}

        {item.addOns && (
          <div className="text-sm text-muted-foreground mt-2">
            <span className="font-semibold text-foreground">{item.addOnsLabel}</span>{' '}
            {Object.entries(item.addOns).map(([addOn, price], index) => (
              <span key={addOn}>
                {addOn} ({price})
                {index < Object.keys(item.addOns!).length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={cn("text-lg font-headline font-semibold text-primary whitespace-nowrap", lang === 'ar' ? 'ps-4' : 'pe-4')}>
        {item.price}
      </div>
      {item.badge && (
        <Badge variant="default" className="absolute top-4 right-0 rtl:right-auto rtl:left-0 bg-accent text-accent-foreground">
          {item.badge}
        </Badge>
      )}
    </div>
  );
}

export function MenuSection({ dictionary, lang }: MenuSectionProps) {
  const categories = Object.keys(dictionary.items) as (keyof typeof dictionary.items)[];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-8">
          {dictionary.title}
        </h2>
        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {categories.map((key) => (
              <TabsTrigger key={key} value={key} className="py-2.5 flex items-center gap-2">
                 {icons[key as keyof typeof icons]}
                {dictionary.categories[key]}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((categoryKey) => (
            <TabsContent key={categoryKey} value={categoryKey}>
              <div className="divide-y divide-border/70">
                {Object.values(dictionary.items[categoryKey]).map((item, index) => (
                   <MenuItemDisplay key={index} item={item} lang={lang} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
