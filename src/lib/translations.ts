
import type { Translations } from './types';

export const translations: { [key: string]: Translations } = {
  en: {
    restaurantName: "QMenu Digital",
    restaurantSubtitle: "A Taste of Morocco",
    address: "123 Kasbah Street, Marrakech, Morocco",
    phone: "+212 5 24 38 86 11",
    header: {
      lang_en: "English",
      lang_fr: "French",
      lang_ar: "Arabic",
    },
    menu: {
      title: "Our Menu",
      extras_question: "Do you want an extra?",
      details_badge: "View Details",
      categories: {
        starters: "Starters",
        main_course: "Main Course",
        desserts: "Desserts",
        drinks: "Drinks",
      },
      items: {
        starters: {
          harira: { name: "Harira Soup", description: "Traditional Moroccan soup with tomatoes, lentils, and chickpeas.", price: "50 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "soup bowl" },
          zalouk: { name: "Zalouk Salad", description: "Smoky aubergine and tomato salad with garlic and spices.", price: "45 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "salad bowl" },
          briouat: { name: "Cheese Briouat", description: "Crispy pastry triangles filled with savory cheese and herbs.", price: "60 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "pastry food" },
        },
        main_course: {
          tagine: { name: "Lamb Tagine with Prunes", description: "Slow-cooked lamb with sweet prunes and toasted almonds.", price: "180 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "food tagine" },
          couscous: { name: "Royal Couscous", description: "Fluffy couscous served with seven vegetables, lamb, and chicken.", price: "200 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "couscous dish" },
          steak: { name: "Grilled Sirloin Steak", description: "Served with seasonal vegetables and your choice of sauce.", price: "220 DH", addOnsLabel: "Extras", addOns: { "Shrimp": "+80 DH", "Lobster Tail": "+150 DH" }, imageUrl: ["https://picsum.photos/600/400?random=1", "https://picsum.photos/600/400?random=2"], imageHint: "grilled steak" },
          pizza: { name: "Atlas Pizza", description: "Spicy merguez sausage, olives, and local cheese.", sizes: { "small": "90 DH", "medium": "120 DH", "large": "160 DH" }, imageUrl: "https://picsum.photos/600/400", imageHint: "pizza slice" },
        },
        desserts: {
          orange_cinnamon: { name: "Orange with Cinnamon", description: "Fresh orange slices sprinkled with sweet cinnamon.", price: "40 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "orange slices" },
          creme_brulee: { name: "Crème Brûlée with Saffron", description: "A classic dessert with a Moroccan twist of saffron.", price: "65 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "creme brulee" },
          pastries: { name: "Moroccan Pastries", description: "Assortment of traditional sweets like Kaab el Ghazal.", price: "70 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "assorted pastries" },
        },
        drinks: {
          mint_tea: { name: "Mint Tea", description: "Traditional Moroccan green tea with fresh mint leaves.", price: "25 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "tea glass" },
          orange_juice: { name: "Fresh Orange Juice", description: "Locally sourced, freshly squeezed orange juice.", price: "30 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "juice glass" },
          mineral_water: { name: "Mineral Water", description: "Still or sparkling.", price: "20 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "water bottle" },
        },
      },
    },
    footer: {
      copyright: "Created by QMenu",
    },
  },
  fr: {
    restaurantName: "QMenu Numérique",
    restaurantSubtitle: "Un Goût du Maroc",
    address: "123 Rue de la Kasbah, Marrakech, Maroc",
    phone: "+212 5 24 38 86 11",
    header: {
      lang_en: "Anglais",
      lang_fr: "Français",
      lang_ar: "Arabe",
    },
    menu: {
      title: "Notre Carte",
      extras_question: "Voulez-vous un supplément?",
      details_badge: "Voir les détails",
      categories: {
        starters: "Entrées",
        main_course: "Plats Principaux",
        desserts: "Desserts",
        drinks: "Boissons",
      },
      items: {
        starters: {
          harira: { name: "Soupe Harira", description: "Soupe traditionnelle marocaine avec tomates, lentilles et pois chiches.", price: "50 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "soup bowl" },
          zalouk: { name: "Salade Zaalouk", description: "Salade d'aubergines et de tomates fumées à l'ail et aux épices.", price: "45 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "salad bowl" },
          briouat: { name: "Briouat au Fromage", description: "Triangles de pâte croustillants farcis de fromage savoureux et d'herbes.", price: "60 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "pastry food" },
        },
        main_course: {
          tagine: { name: "Tagine d'Agneau aux Pruneaux", description: "Agneau mijoté avec des pruneaux sucrés et des amandes grillées.", price: "180 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "food tagine" },
          couscous: { name: "Couscous Royal", description: "Couscous moelleux servi avec sept légumes, agneau et poulet.", price: "200 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "couscous dish" },
          steak: { name: "Entrecôte Grillée", description: "Servie avec des légumes de saison et une sauce au choix.", price: "220 DH", addOnsLabel: "Suppléments", addOns: { "Crevettes": "+80 DH", "Queue de homard": "+150 DH" }, imageUrl: ["https://picsum.photos/600/400?random=1", "https://picsum.photos/600/400?random=2"], imageHint: "grilled steak" },
          pizza: { name: "Pizza Atlas", description: "Saucisse merguez épicée, olives et fromage local.", sizes: { "petite": "90 DH", "moyenne": "120 DH", "grande": "160 DH" }, imageUrl: "https://picsum.photos/600/400", imageHint: "pizza slice" },
        },
        desserts: {
          orange_cinnamon: { name: "Orange à la Cannelle", description: "Tranches d'orange fraîches saupoudrées de cannelle douce.", price: "40 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "orange slices" },
          creme_brulee: { name: "Crème Brûlée au Safran", description: "Un dessert classique avec une touche marocaine de safran.", price: "65 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "creme brulee" },
          pastries: { name: "Pâtisseries Marocaines", description: "Assortiment de douceurs traditionnelles comme Kaab el Ghazal.", price: "70 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "assorted pastries" },
        },
        drinks: {
          mint_tea: { name: "Thé à la Menthe", description: "Thé vert traditionnel marocain avec des feuilles de menthe fraîche.", price: "25 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "tea glass" },
          orange_juice: { name: "Jus d'Orange Frais", description: "Jus d'orange pressé frais de source locale.", price: "30 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "juice glass" },
          mineral_water: { name: "Eau Minérale", description: "Plate ou gazeuse.", price: "20 DH", imageUrl: "https://picsum.photos/600/400", imageHint: "water bottle" },
        },
      },
    },
    footer: {
      copyright: "Créé par QMenu",
    },
  },
  ar: {
    restaurantName: "كيومنيو الرقمية",
    restaurantSubtitle: "مذاق من المغرب",
    address: "123 شارع القصبة، مراكش، المغرب",
    phone: "+212 5 24 38 86 11",
    header: {
      lang_en: "الإنجليزية",
      lang_fr: "الفرنسية",
      lang_ar: "العربية",
    },
    menu: {
      title: "قائمتنا",
      extras_question: "هل تريد إضافة؟",
      details_badge: "عرض التفاصيل",
      categories: {
        starters: "المقبلات",
        main_course: "الأطباق الرئيسية",
        desserts: "الحلويات",
        drinks: "المشروبات",
      },
      items: {
        starters: {
          harira: { name: "شوربة الحريرة", description: "شوربة مغربية تقليدية بالطماطم والعدس والحمص.", price: "50 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "soup bowl" },
          zalouk: { name: "سلطة زعلوك", description: "سلطة الباذنجان والطماطم المدخنة مع الثوم والتوابل.", price: "45 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "salad bowl" },
          briouat: { name: "بريوات بالجبن", description: "مثلثات عجينة مقرمشة محشوة بالجبن المالح والأعشاب.", price: "60 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "pastry food" },
        },
        main_course: {
          tagine: { name: "طاجين لحم بالبرقوق", description: "لحم مطبوخ ببطء مع البرقوق الحلو واللوز المحمص.", price: "180 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "food tagine" },
          couscous: { name: "كسكس ملكي", description: "كسكس ناعم يقدم مع سبع خضروات ولحم ودجاج.", price: "200 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "couscous dish" },
          steak: { name: "شريحة لحم مشوية", description: "تقدم مع خضروات موسمية وصلصة من اختيارك.", price: "220 د.م.", addOnsLabel: "إضافات", addOns: { "جمبري": "+80 د.م.", "ذيل الكركند": "+150 د.م." }, imageUrl: ["https://picsum.photos/600/400?random=1", "https://picsum.photos/600/400?random=2"], imageHint: "grilled steak" },
          pizza: { name: "بيتزا أطلس", description: "نقانق المرجاز الحارة والزيتون والجبن المحلي.", sizes: { "صغيرة": "90 د.م.", "متوسطة": "120 د.م.", "كبيرة": "160 د.م." }, imageUrl: "https://picsum.photos/600/400", imageHint: "pizza slice" },
        },
        desserts: {
          orange_cinnamon: { name: "برتقال بالقرفة", description: "شرائح برتقال طازجة مرشوشة بالقرفة الحلوة.", price: "40 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "orange slices" },
          creme_brulee: { name: "كريم بروليه بالزعفران", description: "حلوى كلاسيكية بلمسة مغربية من الزعفران.", price: "65 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "creme brulee" },
          pastries: { name: "حلويات مغربية", description: "تشكيلة من الحلويات التقليدية مثل كعب الغزال.", price: "70 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "assorted pastries" },
        },
        drinks: {
          mint_tea: { name: "شاي بالنعناع", description: "شاي أخضر مغربي تقليدي بأوراق النعناع الطازجة.", price: "25 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "tea glass" },
          orange_juice: { name: "عصير برتقال طازج", description: "عصير برتقال طازج من مصادر محلية.", price: "30 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "juice glass" },
          mineral_water: { name: "ماء معدني", description: "عادي أو فوار.", price: "20 د.م.", imageUrl: "https://picsum.photos/600/400", imageHint: "water bottle" },
        },
      },
    },
    footer: {
      copyright: "صنع بواسطة كيومنيو",
    },
  },
};

export const getDictionary = (locale: 'en' | 'fr' | 'ar'): Translations => {
  return translations[locale] ?? translations.en;
};
