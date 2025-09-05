

export const CATEGORY_KEYS = ['pizza', 'tacos', 'burger', 'sushi', 'desserts', 'drinks'] as const;
export type CategoryKey = typeof CATEGORY_KEYS[number];

export const categoryNames: Record<CategoryKey, { en: string; fr: string; ar: string }> = {
  pizza: { en: "Pizza", fr: "Pizza", ar: "بيتزا" },
  tacos: { en: "Tacos", fr: "Tacos", ar: "تاكوس" },
  burger: { en: "Burger", fr: "Burger", ar: "برجر" },
  desserts: { en: "Desserts", fr: "Desserts", ar: "حلويات" },
  drinks: { en: "Drinks", fr: "Boissons", ar: "مشروبات" },
  sushi: { en: "Sushi", fr: "Sushi", ar: "سوشي" }
};

type Translatable = {
  en: string;
  fr: string;
  ar: string;
};

export interface MenuItem {
  id: string;
  name: Translatable;
  description: Translatable;
  price?: number;
  sizes?: {
    [key: string]: number;
  };
  addOns?: {
    [key: string]: number;
  };
  imageUrl: string | string[];
  imageHint: string;
}

export type MenuData = Record<CategoryKey, MenuItem[]>;

export const menuData: MenuData = {
  pizza: [
    {
      id: "pizza_fruit_de_mer",
      name: { en: "Seafood Pizza", fr: "Pizza Fruits de Mer", ar: "بيتزا فواكه البحر" },
      description: { en: "Shrimps, calamari, mussels with mozzarella and herbs.", fr: "Crevettes, calamars, moules avec mozzarella et herbes.", ar: "روبيان، كالماري، بلح البحر مع الموزاريلا والأعشاب." },
      price: 85,
      sizes: { small: 85, medium: 110, large: 140 },
      addOns: { "Extra Cheese": 12, "Shrimps": 20 },
      imageUrl: ["/assets/images/PizzaQuatreFromages.jpg", "/assets/images/PizzaQuatreFromages.jpg"],
      imageHint: "seafood pizza"
    },
    {
      id: "pizza_margherita",
      name: { en: "Margherita", fr: "Margherita", ar: "مارغريتا" },
      description: { en: "Classic with tomato, mozzarella, fresh basil.", fr: "Classique avec tomate, mozzarella, basilic frais.", ar: "كلاسيكية بالطماطم والموزاريلا والريحان الطازج." },
      price: 75,
      sizes: { small: 75, medium: 100, large: 120 },
      imageUrl: "/assets/images/PizzaMargherita.jpg",
      imageHint: "classic margherita"
    },
    {
      id: "pizza_4_fromages",
      name: { en: "Four Cheeses", fr: "Quatre Fromages", ar: "أربع أجبان" },
      description: { en: "Mozzarella, gorgonzola, ricotta, parmesan.", fr: "Mozzarella, gorgonzola, ricotta, parmesan.", ar: "موزاريلا، غورغونزولا، ريكوتا، بارميزان." },
      price: 95,
      sizes: { medium: 95, large: 130 },
      imageUrl: "/assets/images/PizzaFruitdemer.jpg",
      imageHint: "four cheese pizza"
    }
  ],
  tacos: [
    {
      id: "tacos_mixte",
      name: { en: "Mixed Meat Tacos", fr: "Tacos Mixte", ar: "طاكوس ميكست" },
      description: { en: "Chicken, beef, and merguez with fries & cheese.", fr: "Poulet, bœuf, et merguez avec frites et fromage.", ar: "دجاج، لحم بقر، ومرقاز مع البطاطس والجبن." },
      price: 35,
      sizes: { small: 35, medium: 50, large: 70 },
      addOns: { "Extra Merguez": 10, "Extra Cheese": 7 },
      imageUrl: ["/assets/images/TacosMixte.jpg", "/assets/images/TacosMixte.jpg"],
      imageHint: "mixed tacos"
    },
    {
      id: "tacos_poulet",
      name: { en: "Chicken Tacos", fr: "Tacos Poulet", ar: "طاكوس دجاج" },
      description: { en: "Grilled chicken with fries, cheddar & sauces.", fr: "Poulet grillé avec frites, cheddar et sauces.", ar: "دجاج مشوي مع بطاطس، شيدر وصلصات." },
      price: 40,
      sizes: { small: 40, medium: 55, large: 70 },
      imageUrl: "/assets/images/TacosPoulet.jpg",
      imageHint: "chicken tacos"
    },
    {
      id: "tacos_ViandeHach",
      name: { en: "Ground Beef Tacos", fr: "Tacos Viande Hachée", ar: "طاكوس لحم مفروم" },
      description: { en: "Grilled chicken with fries, cheddar & sauces.", fr: "Poulet grillé avec frites, cheddar et sauces.", ar: "دجاج مشوي مع بطاطس، شيدر وصلصات." },
      price: 45,
      sizes: { small: 45, medium: 60, large: 70 },
      imageUrl: "/assets/images/TacosViandeHachée.jpg",
      imageHint: "ground beef tacos"
    }
  ],
  burger: [
    {
      id: "burger_classic",
      name: { en: "Classic Beef Burger", fr: "Burger Classique", ar: "برغر كلاسيك" },
      description: { en: "Beef patty, cheddar, lettuce, tomato, and sauce.", fr: "Steak haché, cheddar, laitue, tomate et sauce.", ar: "لحم مفروم، شيدر، خس، طماطم وصلصة." },
      price: 65,
      imageUrl: "/assets/images/BurgerSimple.jpg",
      imageHint: "classic burger"
    },
    {
      id: "burger_double_cheese",
      name: { en: "Double Cheese Burger", fr: "Double Cheese Burger", ar: "دوبل تشيز برغر" },
      description: { en: "Two patties, double cheddar, onions, lettuce.", fr: "Deux steaks, double cheddar, oignons, laitue.", ar: "قطعتان من اللحم، جبن مزدوج، بصل وخس." },
      sizes: { normal: 85, XL: 110 },
      addOns: { "Extra Bacon": 15, "Extra Patty": 20 },
      imageUrl: ["/assets/images/Cheeseburger.jpg", "/assets/images/Cheeseburger.jpg"],
      imageHint: "double cheeseburger"
    }
  ],
  sushi: [
    {
      id: "sushi_california_roll",  
      name: { en: "California Roll", fr: "Roll Californien", ar: "رول كاليفورنيا" },
      description: { en: "Tuna, avocado, cucumber, and wasabi.", fr: "Thon, avocat, concombre, et wasabi.", ar: "صيد، عنب، كوكتيل، وواسابي." },
      price: 45,
      imageUrl: "https://picsum.photos/600/400?random=401",
      imageHint: "california roll"
    },
    {
      id: "sushi_spicy_tuna_roll",
      name: { en: "Spicy Tuna Roll", fr: "Roll Thon Épicé", ar: "رول تونا حار" },
      description: { en: "Tuna with spicy mayo and cucumber.", fr: "Thon avec mayo épicée et concombre.", ar: "تونا مع مايونيز حار وخيار." },
      price: 55,
      imageUrl: "https://picsum.photos/600/400?random=402",
      imageHint: "spicy tuna roll"
    }
  ],
desserts: [
    {
      id: "tiramisu",
      name: { en: "Tiramisu", fr: "Tiramisu", ar: "تيراميسو" },
      description: { en: "Classic Italian dessert with Moroccan coffee touch.", fr: "Dessert italien classique avec une touche de café marocain.", ar: "حلوى إيطالية كلاسيكية بلمسة قهوة مغربية." },
      price: 50,
      imageUrl: "/assets/images/Tiramisu.jpg",
      imageHint: "tiramisu dessert"
    },
    {
      id: "fondant_chocolat",
      name: { en: "Chocolate Fondant", fr: "Fondant au Chocolat", ar: "فوندان شوكولا" },
      description: { en: "Warm chocolate cake with melting center.", fr: "Gâteau au chocolat chaud avec cœur fondant.", ar: "كيك شوكولاتة دافئ بحشوة ذائبة." },
      imageUrl: ["/assets/images/MousseauChocolat.jpg", "/assets/images/MousseauChocolat.jpg"],
      sizes: { single: 45, double: 80 },
      imageHint: "chocolate fondant"
    },
    {
      id: "creme_caramel",
      name: { en: "Crème Caramel", fr: "Crème Caramel", ar: "كريم كراميل" },
      description: { en: "Silky smooth caramel custard dessert.", fr: "Dessert de crème caramel soyeux et lisse.", ar: "حلوى كاسترد الكراميل الحريرية الناعمة." },
      price: 40,
      imageUrl: "/assets/images/CrèmeCaramel.jpg",
      imageHint: "crème caramel dessert"
    },
    {
      id: "cheese_cake",
      name: { en: "Cheesecake", fr: "Cheesecake", ar: "تشيز كيك" },
      description: { en: "Creamy cheesecake with biscuit base and berry topping.", fr: "Cheesecake crémeux sur base biscuit avec coulis de fruits rouges.", ar: "تشيز كيك كريمي بقاعدة البسكويت وتتصدره التوت." },
      price: 55,
      imageUrl: "/assets/images/Cheesecake.jpg",
      imageHint: "cheesecake slice"
    }
  ],
drinks: [
    {
      id: "sprite",
      name: { en: "Sprite", fr: "Sprite", ar: "سبرايت" },
      description: { en: "Refreshing lemon-lime soda.", fr: "Soda rafraîchissant au citron et citron vert.", ar: "مشروب غازي منعش بالليمون." },
      price: 20,
      imageUrl: "/assets/images/sprite.jpg",
      imageHint: "sprite drink"
    },
    {
      id: "hawai",
      name: { en: "Hawai Tropical", fr: "Hawai Tropical", ar: "هاواي تروبيكال" },
      description: { en: "Exotic tropical fruit soda.", fr: "Boisson gazeuse aux fruits tropicaux.", ar: "مشروب غازي بنكهات الفواكه الاستوائية." },
      price: 22,
      imageUrl: ["/assets/images/HawaiTropical.jpg", "/assets/images/HawaiTropical.jpg"],
      imageHint: "hawai drink"
    },
    {
      id: "moroccan_tea",
      name: { en: "Moroccan Mint Tea", fr: "Thé Marocain à la Menthe", ar: "شاي مغربي بالنعناع" },
      description: { en: "Green tea with fresh mint, served traditional way.", fr: "Thé vert avec menthe fraîche, servi de manière traditionnelle.", ar: "شاي أخضر بالنعناع الطازج يقدم بالطريقة التقليدية." },
      sizes: { glass: 15, pot: 40 },
      price: 15,
      imageUrl: "/assets/images/moroccanTea.jpg",
      imageHint: "moroccan tea"
    },
    {
      id: "espresso",
      name: { en: "Espresso", fr: "Espresso", ar: "إسبريسو" },
      description: { en: "Strong, concentrated coffee.", fr: "Café fort et concentré.", ar: "قهوة قوية ومركزة." },
      price: 18,
      imageUrl: "/assets/images/Espresso.jpg",
      imageHint: "espresso coffee"
    },
    {
      id: "cafe_latte",
      name: { en: "Café Latte", fr: "Café Latte", ar: "كافيه لاتيه" },
      description: { en: "Espresso with steamed milk and light foam.", fr: "Espresso avec du lait chauffé et une légère mousse.", ar: "إسبريسو مع حليب مبخر ورغوة خفيفة." },
      price: 25,
      imageUrl: "/assets/images/CafeLatte.jpg",
      imageHint: "cafe latte"
    },
    {
      id: "cappuccino",
      name: { en: "Cappuccino", fr: "Cappuccino", ar: "كابتشينو" },
      description: { en: "Espresso with equal parts steamed milk and foam.", fr: "Espresso avec parts égales de lait chauffé et de mousse.", ar: "إسبريسو مع أجزاء متساوية من الحليب المبخر والرغوة." },
      price: 26,
      imageUrl: "/assets/images/Cappuccino.jpg",
      imageHint: "cappuccino"
    },
    {
      id: "moroccan_coffee",
      name: { en: "Moroccan Spiced Coffee", fr: "Café Marocain Épicé", ar: "قهوة مغربية بالبهارات" },
      description: { en: "Coffee with traditional Moroccan spices.", fr: "Café avec des épices marocaines traditionnelles.", ar: "قهوة مع بهارات مغربية تقليدية." },
      price: 22,
      imageUrl: "/assets/images/MoroccanSpicedCoffee.jpg",
      imageHint: "moroccan coffee"
    },
    {
      id: "avocado_smoothie",
      name: { en: "Avocado Smoothie", fr: "Smoothie à l'Avocat", ar: "سموذي الأفوكادو" },
      description: { en: "Creamy avocado blended with milk and sugar.", fr: "Avocat crémeux mixé avec du lait et du sucre.", ar: "أفوكادو كريمي ممزوج مع الحليب والسكر." },
      price: 28,
      imageUrl: "/assets/images/AvocadoSmoothie.jpg",
      imageHint: "avocado smoothie"
    },
    {
      id: "orange_juice",
      name: { en: "Fresh Orange Juice", fr: "Jus d'Orange Frais", ar: "عصير برتقال طازج" },
      description: { en: "Freshly squeezed orange juice.", fr: "Jus d'orange fraîchement pressé.", ar: "عصير برتقال طازج معصور." },
      price: 20,
      imageUrl: "/assets/images/FreshOrangeJuice.jpg",
      imageHint: "fresh orange juice"
    }
  ]
};
