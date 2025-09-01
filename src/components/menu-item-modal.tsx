
'use client';

import { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import type { MenuItem, CartItem, Translations } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { useCart } from '@/context/cart-context';

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  dictionary: Translations['menu'] & Translations['cart'];
}

export function MenuItemModal({ isOpen, onClose, item, dictionary }: MenuItemModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: boolean }>({});

  const images = useMemo(() => item ? (Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl]) : [], [item]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddOnToggle = (addOn: string) => {
    setSelectedAddOns(prev => ({ ...prev, [addOn]: !prev[addOn] }));
  };

  const handleAddToCart = () => {
    if (!item) return;

    const finalAddOns: { [key: string]: string } = {};
    Object.entries(selectedAddOns).forEach(([key, value]) => {
      if (value && item.addOns) {
        finalAddOns[key] = item.addOns[key];
      }
    });
    
    let price = item.price || '';
    if (selectedSize && item.sizes) {
      price = item.sizes[selectedSize]!;
    }
    
    const cartItem: Omit<CartItem, 'id' | 'totalPrice'> = {
      menuItem: item,
      quantity,
      unitPrice: price,
      selectedSize: selectedSize,
      selectedAddOns: finalAddOns,
    };
    
    addItem(cartItem);
    onClose();
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        onClose();
        setQuantity(1);
        setSelectedSize(null);
        setSelectedAddOns({});
      }
    }}>
      <DialogContent dir="ltr" className="sm:max-w-3xl p-0">
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
                  <CarouselPrevious className="absolute start-4" />
                  <CarouselNext className="absolute end-4" />
                </>
              )}
            </Carousel>
          </div>

          <div className="p-6 flex flex-col">
            <DialogHeader className='text-left'>
              <DialogTitle className="text-xl md:text-2xl font-headline">{item.name}</DialogTitle>
              <DialogDescription className="pt-2 text-base">
                {item.description}
              </DialogDescription>
            </DialogHeader>

            <Separator className="my-4" />
            
            <div className="flex-grow space-y-6">
              {item.sizes && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">{dictionary.size_prompt}</h4>
                  <RadioGroup onValueChange={handleSizeChange} defaultValue={Object.keys(item.sizes)[0]}>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {Object.entries(item.sizes).map(([size, price]) => (
                        <div key={size} className="flex items-center">
                          <RadioGroupItem value={size} id={size} />
                          <Label htmlFor={size} className="flex items-baseline text-sm flex-grow ms-2 cursor-pointer">
                            <span className="capitalize font-medium">{size}</span>
                            <span className="flex-grow border-b-2 border-dotted border-border/50 mx-2"></span>
                            <span className="font-semibold text-primary">{price}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {item.addOns && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">{dictionary.extras_question}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(item.addOns).map(([addOn, price]) => (
                      <div key={addOn} className="flex items-center bg-secondary/50 p-2 rounded-md">
                        <Checkbox id={addOn} onCheckedChange={() => handleAddOnToggle(addOn)} />
                        <Label htmlFor={addOn} className="flex justify-between items-center w-full ms-2 cursor-pointer">
                           <span>{addOn}</span>
                           <span className="font-semibold text-primary/90">{price}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <DialogFooter className='mt-6 pt-6 border-t'>
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-bold w-10 text-center">{quantity}</span>
                        <Button variant="outline" size="icon" onClick={() => setQuantity(q => q + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button onClick={handleAddToCart} size="lg" disabled={item.sizes && !selectedSize}>
                        <Plus className="w-5 h-5 me-2" /> {dictionary.add_to_order_button}
                    </Button>
                </div>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
