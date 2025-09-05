
import type { Translations } from './types';
import { uiTranslations } from './ui-translations';
import { menuData, CATEGORY_KEYS, categoryNames } from './menu-data';

// Dynamically translate menu data and categories
function translateMenuData(lang: 'en' | 'fr' | 'ar'): Translations['menu']['items'] {
    const translatedItems: any = {};
    CATEGORY_KEYS.forEach((categoryKey) => {
        translatedItems[categoryKey] = {};
        menuData[categoryKey].forEach((item) => {
            const translatedItem = {
                ...item,
                name: item.name[lang],
                description: item.description[lang],
                price: item.price?.toString(),
                sizes: item.sizes ? Object.fromEntries(Object.entries(item.sizes).map(([k, v]) => [k, v.toString()])) : undefined,
                addOns: item.addOns ? Object.fromEntries(Object.entries(item.addOns).map(([k, v]) => [k, v.toString()])) : undefined,
            };
            delete (translatedItem as any).id;
            translatedItems[categoryKey][item.id] = translatedItem;
        });
    });
    return translatedItems;
}

// Dynamically build categories translation
function getCategoryTranslations(lang: 'en' | 'fr' | 'ar') {
    const result: Record<string, string> = {};
    CATEGORY_KEYS.forEach((key) => {
        result[key] = categoryNames[key][lang];
    });
    return result;
}

export const getTranslations = (locale: 'en' | 'fr' | 'ar'): Translations => {
    const lang = (['en', 'fr', 'ar'].includes(locale) ? locale : 'en') as 'en' | 'fr' | 'ar';
    const specificUiTranslations = uiTranslations[lang];
    const translatedMenuItems = translateMenuData(lang);
    const dynamicCategories = getCategoryTranslations(lang);

    return {
        ...specificUiTranslations,
        menu: {
            ...specificUiTranslations.menu,
            categories: dynamicCategories,
            items: translatedMenuItems,
        },
    };
};
