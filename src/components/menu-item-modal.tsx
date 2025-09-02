
'use client';

import { useState, useMemo, useEffect } from 'react';
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
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { useCart } from '@/context/cart-context';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  dictionary: Translations['menu'];
  cartDictionary: Translations['cart'];
}

export function MenuItemModal({ isOpen, onClose, item, dictionary, cartDictionary }: MenuItemModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: boolean }>({});
  
  const images = useMemo(() => item ? (Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl]) : [], [item]);

  useEffect(() => {
    if (item) {
        setQuantity(1);
        if (item.sizes) {
            setSelectedSize(Object.keys(item.sizes)[0]);
        } else {
            setSelectedSize(null);
        }
        setSelectedAddOns({});
    }
  }, [item]);


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
  
  const currentTotalPrice = useMemo(() => {
    if (!item) return 0;
    
    let basePrice = 0;
    if (item.sizes && selectedSize && item.sizes[selectedSize]) {
      basePrice = parseFloat(item.sizes[selectedSize]!);
    } else if (item.price) {
      basePrice = parseFloat(item.price);
    }
    
    const addOnsPrice = Object.entries(selectedAddOns).reduce((total, [key, isSelected]) => {
      if (isSelected && item.addOns && item.addOns[key]) {
        return total + parseFloat(item.addOns[key]);
      }
      return total;
    }, 0);

    return (basePrice + addOnsPrice) * quantity;
  }, [item, quantity, selectedSize, selectedAddOns]);

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl p-0">
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
                  <CarouselPrevious className="absolute start-4 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute end-4 top-1/2 -translate-y-1/2" />
                </>
              )}
            </Carousel>
          </div>

          <div className="p-6 flex flex-col">
            <DialogHeader>
                <div className='flex justify-between items-start'>
                    <div className='flex-grow'>
                        <DialogTitle className="text-xl md:text-2xl font-headline">{item.name}</DialogTitle>
                        <DialogDescription className="pt-2 text-base">
                            {item.description}
                        </DialogDescription>
                    </div>
                </div>
            </DialogHeader>

            <Separator className="my-4" />
            
            <div className="flex-grow space-y-6 overflow-y-auto max-h-[40vh] p-1">
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
                            <span className="font-semibold text-primary">{price} {cartDictionary.currency}</span>
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
                           <span className="font-semibold text-primary/90">+{price} {cartDictionary.currency}</span>
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
                        <Button variant="outline" size="icon" className='rounded-full w-10 h-10' onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-bold w-10 text-center">{quantity}</span>
                        <Button variant="outline" size="icon" className='rounded-full w-10 h-10' onClick={() => setQuantity(q => q + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    
                    <div className="flex-1 text-center">
                        <p className="text-xl font-bold text-primary">{currentTotalPrice.toFixed(2)} {cartDictionary.currency}</p>
                    </div>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button onClick={handleAddToCart} size="icon" className="rounded-full w-12 h-12" disabled={item.sizes && !selectedSize}>
                              <Plus className="w-6 h-6" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{cartDictionary.add_to_order_button}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </div>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
