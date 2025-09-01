'use client';
import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';
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
    <div className="py-6 flex gap-4 items-start relative border-b border-border/70 last:border-b-0 md:border-b-0">
      <div className="w-20 h-20 flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-full object-cover w-20 h-20 border-2 border-primary/20 shadow-sm"
          data-ai-hint={item.imageHint}
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-baseline">
            <h4 className="font-headline text-lg text-foreground">{item.name}</h4>
        </div>
        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
        
        {item.price && (
          <div className="flex items-baseline mt-2">
            <span className="flex-grow border-b-2 border-dotted border-border/50 mx-2"></span>
            <span className={cn("text-lg font-headline font-semibold text-primary whitespace-nowrap", lang === 'ar' ? 'ps-2' : 'pe-2')}>
              {item.price}
            </span>
          </div>
        )}

        {item.sizes && (
          <div className="text-sm text-foreground mt-2 space-y-1">
             {Object.entries(item.sizes).map(([size, price]) => (
              <div key={size} className="flex items-baseline">
                <span className='capitalize'>{size}</span>
                <span className="flex-grow border-b-2 border-dotted border-border/50 mx-2"></span>
                <span className="font-semibold text-primary">{price}</span>
              </div>
            ))}
          </div>
        )}

        {item.addOns && (
          <Alert className="mt-4 bg-secondary/50 border-accent/50">
            <Info className="h-4 w-4 text-accent" />
            <AlertTitle className="text-accent">{item.addOnsLabel}</AlertTitle>
            <AlertDescription>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {Object.entries(item.addOns).map(([addOn, price]) => (
                  <span key={addOn}>
                    {addOn} ({price})
                  </span>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}
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
              <TabsTrigger key={key} value={key} className="py-2.5 flex items-center gap-2 text-base">
                 {icons[key as keyof typeof icons]}
                {dictionary.categories[key]}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((categoryKey) => (
            <TabsContent key={categoryKey} value={categoryKey}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
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
