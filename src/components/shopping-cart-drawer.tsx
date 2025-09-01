
'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { Badge } from './ui/badge';
import type { Translations } from '@/lib/types';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';

export function ShoppingCartDrawer({ dictionary }: { dictionary: Translations['cart'] }) {
  const { cart, updateItemQuantity, removeItem, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative rounded-full">
          <ShoppingCart className="h-5 w-5" />
          {cart.length > 0 && (
            <Badge
              variant="default"
              className="absolute -top-2 -right-2 h-6 w-6 justify-center rounded-full p-0 text-xs"
            >
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-headline">{dictionary.title}</SheetTitle>
        </SheetHeader>
        {cart.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-muted-foreground">{dictionary.empty_cart_message}</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6">
              <div className="px-6 py-2">
                <div className="divide-y divide-border">
                  {cart.map((item) => (
                    <div key={item.id} className="py-4">
                      <div className="flex items-start gap-4">
                        <Image
                          src={Array.isArray(item.menuItem.imageUrl) ? item.menuItem.imageUrl[0] : item.menuItem.imageUrl}
                          alt={item.menuItem.name}
                          width={64}
                          height={64}
                          className="h-16 w-16 rounded-md object-cover"
                          data-ai-hint={item.menuItem.imageHint}
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{item.menuItem.name}</p>
                          {item.selectedSize && <p className="text-sm text-muted-foreground capitalize">{item.selectedSize}</p>}
                          {item.selectedAddOns && Object.keys(item.selectedAddOns).length > 0 && (
                            <ul className="mt-1 text-xs text-muted-foreground">
                              {Object.entries(item.selectedAddOns).map(([name, price]) => (
                                <li key={name}>+ {name} ({price} {dictionary.currency})</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="text-right">
                           <p className="font-semibold">{item.totalPrice.toFixed(2)} {dictionary.currency}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                           <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto border-t pt-4">
              <div className="w-full space-y-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>{dictionary.total}</span>
                  <span>{totalPrice.toFixed(2)} {dictionary.currency}</span>
                </div>
                <Button size="lg" className="w-full">
                  {dictionary.place_order_button}
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
