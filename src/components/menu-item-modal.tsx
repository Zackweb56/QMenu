
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import type { MenuItem } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  lang: 'en' | 'fr' | 'ar';
  dictionary: {
    extras_question: string;
  };
}

export function MenuItemModal({ isOpen, onClose, item, lang, dictionary }: MenuItemModalProps) {
  if (!item) return null;

  const images = Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-0">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={item.name}
                      fill
                      className="object-cover rounded-t-lg md:rounded-s-lg md:rounded-t-none"
                      data-ai-hint={item.imageHint}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-4" />
                  <CarouselNext className="absolute right-4" />
                </>
              )}
            </Carousel>
          </div>

          <div className="p-6 flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">{item.name}</DialogTitle>
              <DialogDescription className="pt-2 text-base">
                {item.description}
              </DialogDescription>
            </DialogHeader>

            <Separator className="my-4" />
            
            <div className="flex-grow">
              {item.sizes && (
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {Object.entries(item.sizes).map(([size, price]) => (
                      <div key={size} className="flex items-baseline text-sm">
                        <span className="capitalize font-medium">{size}</span>
                        <span className="flex-grow border-b-2 border-dotted border-border/50 mx-2"></span>
                        <span className="font-semibold text-primary">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.price && (
                <div className="flex items-center justify-end">
                   <Badge variant="default" className='text-lg'>{item.price}</Badge>
                </div>
              )}

              {item.addOns && (
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">{dictionary.extras_question}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(item.addOns).map(([addOn, price]) => (
                      <div key={addOn} className="bg-secondary/50 p-2 rounded-md flex justify-between items-center">
                        <span>{addOn}</span>
                        <span className="font-semibold text-primary/90">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
