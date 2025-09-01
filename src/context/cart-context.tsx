
'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { CartItem, MenuItem } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void;
  removeItem: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const calculateTotalPrice = (item: Omit<CartItem, 'totalPrice'>): number => {
    const basePrice = parseFloat(item.unitPrice);
    const addOnsPrice = Object.values(item.selectedAddOns || {}).reduce(
      (sum, price) => sum + parseFloat(price),
      0
    );
    return (basePrice + addOnsPrice) * item.quantity;
};


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addItem = useCallback((itemToAdd: Omit<CartItem, 'id' | 'totalPrice'>) => {
    setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex(item => 
            item.menuItem.name === itemToAdd.menuItem.name &&
            item.selectedSize === itemToAdd.selectedSize &&
            JSON.stringify(item.selectedAddOns) === JSON.stringify(itemToAdd.selectedAddOns)
        );

        const newCart = [...prevCart];

        if (existingItemIndex > -1) {
            const existingItem = newCart[existingItemIndex];
            const newQuantity = existingItem.quantity + itemToAdd.quantity;
            const updatedItem = {
                ...existingItem,
                quantity: newQuantity,
                totalPrice: calculateTotalPrice({ ...existingItem, quantity: newQuantity }),
            };
            newCart[existingItemIndex] = updatedItem;
        } else {
            const newItem = {
                ...itemToAdd,
                id: `${itemToAdd.menuItem.name}-${Date.now()}`,
                totalPrice: calculateTotalPrice(itemToAdd),
            };
            newCart.push(newItem);
        }
        return newCart;
    });

    toast({
        title: "Added to cart",
        description: `${itemToAdd.quantity} x ${itemToAdd.menuItem.name}`,
    });
  }, [toast]);

  const removeItem = useCallback((itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }, []);

  const updateItemQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity,
              totalPrice: calculateTotalPrice({ ...item, quantity }),
            }
          : item
      )
    );
  }, [removeItem]);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  }, [cart]);

  const value = {
    cart,
    addItem,
    removeItem,
    updateItemQuantity,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
