
import type { CategoryKey } from './menu-data';

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  badge?: string;
  sizes?: {
    [key: string]: string | undefined;
  };
  addOns?: { [key: string]: string };
  addOnsLabel?: string;
  imageUrl: string | string[];
  imageHint: string;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  unitPrice: string;
  totalPrice: number;
  selectedSize?: string | null;
  selectedAddOns?: { [key:string]: string };
}

export type MenuCategory = {
  [key in CategoryKey]: MenuItem;
};

export interface Translations {
  restaurantName: string;
  restaurantSubtitle: string;
  address: string;
  phone: string;
  header: {
    lang_en: string;
    lang_fr: string;
    lang_ar: string;
  };
  menu: {
    title: string;
    extras_question: string;
    details_badge: string;
    categories: {
      pizza: string;
      tacos: string;
      burger: string;
      desserts: string;
      drinks: string;
    };
    items: {
      pizza: MenuCategory;
      tacos: MenuCategory;
      burger: MenuCategory;
      desserts: MenuCategory;
      drinks: MenuCategory;
    };
    size_prompt: string;
  };
  cart: {
    title: string;
    empty_cart_message: string;
    item_total: string;
    extras_total: string;
    total: string;
    place_order_button: string;
    add_to_order_button: string;
    size_prompt: string;
    currency: string;
  },
  footer: {
    copyright: string;
    developer: string;
    contact: string;
    contactUrl: string;
  };
}
