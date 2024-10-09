'use client';

import { useLocale, useTranslations } from 'next-intl';
import styles from './LocaleSwitcher.module.scss';
import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';
// import { setUserLocale } from '@/services/locale';

export default function LocaleSwitcher() {
  const t = useTranslations('nav.locale');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onLanguageChange(event: any) {
    const nextLocale = event.target.dataset.locale;
    // debugger;
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  // const locale = value as Locale;
  //   startTransition(() => {
  //     setUserLocale(nextLocale);
  //   });
  // }

  return (
    <div className={styles.switcher}>
      <span
        className={`${styles.languageOption} ${
          locale === 'en' ? styles.active : ''
        }`}
        data-locale='en'
        onClick={onLanguageChange}
      >
        {t('en')}
      </span>
      <span className={styles.separator}>|</span>
      <span
        className={`${styles.languageOption} ${
          locale === 'sr' ? styles.active : ''
        }`}
        data-locale='sr'
        onClick={onLanguageChange}
      >
        {t('sr')}
      </span>
    </div>
  );
}
