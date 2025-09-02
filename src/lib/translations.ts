
import type { Translations } from './types';
import { uiTranslations } from './ui-translations';
import { menuData } from './menu-data';
import type { MenuItem as MenuItemData, MenuCategory as MenuCategoryData } from './menu-data';

function translateMenuData(data: MenuCategoryData[], lang: 'en' | 'fr' | 'ar'): Translations['menu']['items'] {
    const translatedItems: Translations['menu']['items'] = {
        starters: {},
        main_course: {},
        pizza: {},
        tacos: {},
        desserts: {},
        drinks: {},
    };

    data.forEach(category => {
        const categoryKey = category.key as keyof Translations['menu']['items'];
        
        category.items.forEach(itemData => {
            const translatedItem = {
                ...itemData,
                name: itemData.name[lang],
                description: itemData.description[lang],
                price: itemData.price?.toString(),
                sizes: itemData.sizes ? Object.entries(itemData.sizes).reduce((acc, [key, value]) => {
                    acc[key] = value.toString();
                    return acc;
                }, {} as { [key: string]: string }) : undefined,
                addOns: itemData.addOns ? Object.entries(itemData.addOns).reduce((acc, [key, value]) => {
                    acc[key] = value.toString();
                    return acc;
                }, {} as { [key: string]: string }) : undefined,
            };
            delete (translatedItem as any).id;
            
            translatedItems[categoryKey][itemData.id] = translatedItem;
        });
    });

    return translatedItems;
}


export const getTranslations = (locale: 'en' | 'fr' | 'ar'): Translations => {
  const lang = (['en', 'fr', 'ar'].includes(locale) ? locale : 'en') as 'en' | 'fr' | 'ar';
  
  const specificUiTranslations = uiTranslations[lang];
  const translatedMenuItems = translateMenuData(menuData, lang);

  return {
    ...specificUiTranslations,
    menu: {
        ...specificUiTranslations.menu,
        items: translatedMenuItems,
    }
  };
};
