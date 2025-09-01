
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

export function LanguageSwitcher({ lang, dictionary }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const languages: ('en' | 'fr' | 'ar')[] = ['en', 'fr', 'ar'];

  return (
    <div className="flex gap-1">
      {languages.map((locale) => (
        <Button
          key={locale}
          asChild
          variant={lang === locale ? 'default' : 'outline'}
          size="sm"
          className={cn(
            'px-3',
            lang === locale
              ? 'bg-primary text-primary-foreground'
              : 'bg-background/50 text-foreground'
          )}
        >
          <Link href={redirectedPathname(locale)}>
            {dictionary[`lang_${locale}` as keyof typeof dictionary]}
          </Link>
        </Button>
      ))}
    </div>
  );
}
