
type Translatable = {
  en: string;
  fr: string;
  ar: string;
}

export interface MenuItem {
  id: string;
  name: Translatable;
  description: Translatable;
  price?: number;
  sizes?: {
    [key: string]: number;
  };
  addOns?: {
    [key: string]: number
  };
  imageUrl: string | string[];
  imageHint: string;
}

export interface MenuCategory {
  key: 'starters' | 'main_course' | 'tacos' | 'desserts' | 'drinks';
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    key: 'starters',
    items: [
      { id: 'harira', name: { en: "Harira Soup", fr: "Soupe Harira", ar: "شوربة الحريرة" }, description: { en: "Traditional Moroccan soup with tomatoes, lentils, and chickpeas.", fr: "Soupe traditionnelle marocaine avec tomates, lentilles et pois chiches.", ar: "شوربة مغربية تقليدية بالطماطم والعدس والحمص." }, price: 50, imageUrl: "https://picsum.photos/600/400", imageHint: "soup bowl" },
      { id: 'zalouk', name: { en: "Zalouk Salad", fr: "Salade Zaalouk", ar: "سلطة زعلوك" }, description: { en: "Smoky aubergine and tomato salad with garlic and spices.", fr: "Salade d'aubergines et de tomates fumées à l'ail et aux épices.", ar: "سلطة الباذنجان والطماطم المدخنة مع الثوم والتوابل." }, price: 45, imageUrl: "https://picsum.photos/600/400", imageHint: "salad bowl" },
      { id: 'briouat', name: { en: "Cheese Briouat", fr: "Briouat au Fromage", ar: "بريوات بالجبن" }, description: { en: "Crispy pastry triangles filled with savory cheese and herbs.", fr: "Triangles de pâte croustillants farcis de fromage savoureux et d'herbes.", ar: "مثلثات عجينة مقرمشة محشوة بالجبن المالح والأعشاب." }, price: 60, imageUrl: "https://picsum.photos/600/400", imageHint: "pastry food" },
    ]
  },
  {
    key: 'main_course',
    items: [
      { id: 'tagine', name: { en: "Lamb Tagine with Prunes", fr: "Tagine d'Agneau aux Pruneaux", ar: "طاجين لحم بالبرقوق" }, description: { en: "Slow-cooked lamb with sweet prunes and toasted almonds.", fr: "Agneau mijoté avec des pruneaux sucrés et des amandes grillées.", ar: "لحم مطبوخ ببطء مع البرقوق الحلو واللوز المحمص." }, price: 180, imageUrl: "https://picsum.photos/600/400", imageHint: "food tagine" },
      { id: 'couscous', name: { en: "Royal Couscous", fr: "Couscous Royal", ar: "كسكس ملكي" }, description: { en: "Fluffy couscous served with seven vegetables, lamb, and chicken.", fr: "Couscous moelleux servi avec sept légumes, agneau et poulet.", ar: "كسكس ناعم يقدم مع سبع خضروات ولحم ودجاج." }, price: 200, imageUrl: "https://picsum.photos/600/400", imageHint: "couscous dish" },
      { id: 'steak', name: { en: "Grilled Sirloin Steak", fr: "Entrecôte Grillée", ar: "شريحة لحم مشوية" }, description: { en: "Served with seasonal vegetables and your choice of sauce.", fr: "Servie avec des légumes de saison et une sauce au choix.", ar: "تقدم مع خضروات موسمية وصلصة من اختيارك." }, price: 220, addOns: { "Shrimp": 80, "Lobster Tail": 150 }, imageUrl: ["https://picsum.photos/600/400?random=1", "https://picsum.photos/600/400?random=2"], imageHint: "grilled steak" },
      { id: 'pizza', name: { en: "Atlas Pizza", fr: "Pizza Atlas", ar: "بيتزا أطلس" }, description: { en: "Spicy merguez sausage, olives, and local cheese.", fr: "Saucisse merguez épicée, olives et fromage local.", ar: "نقانق المرجاز الحارة والزيتون والجبن المحلي." }, sizes: { "small": 90, "medium": 120, "large": 160 }, imageUrl: "https://picsum.photos/600/400", imageHint: "pizza slice" },
    ]
  },
  {
    key: "tacos",
    items: [
      {
        id: "tacos_poulet",
        name: {
          en: "Chicken Tacos",
          fr: "Tacos au Poulet",
          ar: "طاكوس الدجاج"
        },
        description: {
          en: "Grilled chicken strips, french fries, cheddar cheese, and your choice of sauces, all grilled in a tortilla.",
          fr: "Lanières de poulet grillé, frites, fromage cheddar, et vos sauces au choix, le tout grillé dans une tortilla.",
          ar: "شرائح دجاج مشوية، بطاطس مقلية، جبنة شيدر، وصلصات من اختيارك، كلها مشوية في Tortilla."
        },
        sizes: {
          "small": 22,
          "medium": 32,
          "large": 45
        },
        addOns: {
          "Extra Cheese": 5,
          "Extra Fries": 4,
          "Extra Chicken": 8
        },
        imageUrl: [
          "https://picsum.photos/600/400?random=3",
          "https://picsum.photos/600/400?random=4"
        ],
        imageHint: 'grilled chicken moroccan tacos'
      },
      {
        "id": "tacos_viande_hachee",
        "name": {
          "en": "Ground Beef Tacos",
          "fr": "Tacos à la Viande Hachée",
          "ar": "طاكوس اللحم المفروم"
        },
        "description": {
          "en": "Seasoned ground beef, golden fries, melted cheese, and sauces in a pressed tortilla.",
          "fr": "Viande hachée assaisonnée, frites dorées, fromage fondu et sauces dans une tortilla pressée.",
          "ar": "لحم مفروم متبل، بطاطس مقلية ذهبية، جبنة ذائبة، وصلصات في Tortilla مضغوطة."
        },
        sizes: {
          "small": 22,
          "medium": 32,
          "large": 45
        },
        "addOns": {
          "Extra Cheese": 5,
          "Spicy Merguez": 10,
          "Fried Egg": 4
        },
        "imageUrl": [
          "https://picsum.photos/600/400?random=5",
          "https://picsum.photos/600/400?random=6"
        ],
        "imageHint": "ground beef moroccan taco"
      },
      {
        "id": "tacos_mixte",
        "name": {
          "en": "Mixed Meat Tacos",
          "fr": "Tacos Mixte",
          "ar": "طاكوس ميكست"
        },
        "description": {
          "en": "The ultimate combination of chicken, ground beef, and merguez sausage with fries and cheese.",
          "fr": "La combinaison ultime de poulet, viande hachée et merguez avec des frites et du fromage.",
          "ar": "مزيج من الدجاج، اللحم المفروم، ونقانق الميرguez مع البطاطس المقلية والجبن."
        },
        sizes: {
          "small": 30,
          "medium": 45,
          "large": 60
        },
        "addOns": {
          "Extra Merguez": 12,
          "Extra Cheese": 5,
          "Olives": 3
        },
        "imageUrl": [
          "https://picsum.photos/600/400?random=7",
          "https://picsum.photos/600/400?random=8",
          "https://picsum.photos/600/400?random=9"
        ],
        "imageHint": "mixed meat moroccan taco"
      },
      {
        "id": "tacos_nuggets",
        "name": {
          "en": "Nuggets Tacos",
          "fr": "Tacos aux Nuggets",
          "ar": "طاكوس الناغتس"
        },
        "description": {
          "en": "Crispy chicken nuggets, fries, and a blend of cheeses for a crunchy experience.",
          "fr": "Nuggets de poulet croustillants, frites et un mélange de fromages pour une expérience croquante.",
          "ar": "قطع دجاج مقرمشة، بطاطس مقلية، ومزيج من الجبن لتجربة مقرمشة."
        },
        sizes: {
          "small": 22,
          "medium": 32,
          "large": 45
        },
        "addOns": {
          "Extra Nuggets": 9,
          "Extra Cheese": 5,
          "Bacon": 7
        },
        "imageUrl": "https://picsum.photos/600/400?random=10",
        "imageHint": "nugget moroccan taco"
      }
    ]
  },
  {
    key: 'desserts',
    items: [
      { id: 'orange_cinnamon', name: { en: "Orange with Cinnamon", fr: "Orange à la Cannelle", ar: "برتقال بالقرفة" }, description: { en: "Fresh orange slices sprinkled with sweet cinnamon.", fr: "Tranches d'orange fraîches saupoudrées de cannelle douce.", ar: "شرائح برتقال طازجة مرشوشة بالقرفة الحلوة." }, price: 40, imageUrl: "https://picsum.photos/600/400", imageHint: "orange slices" },
      { id: 'creme_brulee', name: { en: "Crème Brûlée with Saffron", fr: "Crème Brûlée au Safran", ar: "كريم بروليه بالزعفران" }, description: { en: "A classic dessert with a Moroccan twist of saffron.", fr: "Un dessert classique avec une touche marocaine de safran.", ar: "حلوى كلاسيكية بلمسة مغربية من الزعفران." }, price: 65, imageUrl: "https://picsum.photos/600/400", imageHint: "creme brulee" },
      { id: 'pastries', name: { en: "Moroccan Pastries", fr: "Pâtisseries Marocaines", ar: "حلويات مغربية" }, description: { en: "Assortment of traditional sweets like Kaab el Ghazal.", fr: "Assortiment de douceurs traditionnelles comme Kaab el Ghazal.", ar: "تشكيلة من الحلويات التقليدية مثل كعب الغزال." }, price: 70, imageUrl: "https://picsum.photos/600/400", imageHint: "assorted pastries" },
    ]
  },
  {
    key: 'drinks',
    items: [
      { id: 'mint_tea', name: { en: "Mint Tea", fr: "Thé à la Menthe", ar: "شاي بالنعناع" }, description: { en: "Traditional Moroccan green tea with fresh mint leaves.", fr: "Thé vert traditionnel marocain avec des feuilles de menthe fraîche.", ar: "شاي أخضر مغربي تقليدي بأوراق النعناع الطازجة." }, price: 25, imageUrl: "https://picsum.photos/600/400", imageHint: "tea glass" },
      { id: 'orange_juice', name: { en: "Fresh Orange Juice", fr: "Jus d'Orange Frais", ar: "عصير برتقال طازج" }, description: { en: "Locally sourced, freshly squeezed orange juice.", fr: "Jus d'orange pressé frais de source locale.", ar: "عصير برتقال طازج من مصادر محلية." }, price: 30, imageUrl: "https://picsum.photos/600/400", imageHint: "juice glass" },
      { id: 'mineral_water', name: { en: "Mineral Water", fr: "Eau Minérale", ar: "ماء معدني" }, description: { en: "Still or sparkling.", fr: "Plate ou gazeuse.", ar: "عادي أو فوار." }, price: 20, imageUrl: "https://picsum.photos/600/400", imageHint: "water bottle" },
    ]
  }
];
