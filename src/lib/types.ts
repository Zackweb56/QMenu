
export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  badge?: string;
  sizes?: { [key: string]: string };
  addOns?: { [key: string]: string };
  addOnsLabel?: string;
  imageUrl: string;
  imageHint: string;
}

export interface MenuCategory {
  [key: string]: MenuItem;
}

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
    categories: {
      starters: string;
      main_course: string;
      desserts: string;
      drinks: string;
    };
    items: {
      starters: MenuCategory;
      main_course: MenuCategory;
      desserts: MenuCategory;
      drinks: MenuCategory;
    };
  };
  footer: {
    copyright: string;
  };
}
