import { defineRouting } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'sr'],
  defaultLocale: 'en',
  localePrefix: 'never',
  pathnames: {
    '/': '/',
    '/about-us': {
      en: '/about-us',
      sr: '/o-nama',
    },
    '/contact': {
      en: '/contact',
      sr: '/kontakt',
    },
    // '/nasi-radovi/[...projectSlug]': {
    //   en: '/our-work/[...projectSlug]',
    //   sr: '/nasi-radovi/[...projectSlug]',
    // },
    '[...rest]': '[...rest]',
  },
});

// export type Pathnames = keyof typeof routing.pathnames;
// export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
