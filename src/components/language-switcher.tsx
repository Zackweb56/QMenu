
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Translations } from '@/lib/types';

type LanguageSwitcherProps = {
  lang: 'en' | 'fr' | 'ar';
  dictionary: Translations['header'];
};

type Language = {
  key: 'en' | 'fr' | 'ar';
  flag: string;
};

export function LanguageSwitcher({ lang, dictionary }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const languages: Language[] = [
    { key: 'en', flag: '🇬🇧' },
    { key: 'fr', flag: '🇫🇷' },
    { key: 'ar', flag: '🇲🇦' },
  ];

  return (
    <div className="flex gap-2">
      {languages.map(({ key, flag }) => (
        <Button
          key={key}
          asChild
          variant={lang === key ? 'default' : 'outline'}
          size="sm"
          className={cn(
            'rounded-full px-4',
            lang === key
              ? 'bg-primary text-primary-foreground'
              : 'bg-background/50 text-foreground'
          )}
        >
          <Link href={redirectedPathname(key)} className="flex items-center gap-2">
            <span>{flag}</span>
            <span>{dictionary[`lang_${key}` as keyof typeof dictionary]}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
