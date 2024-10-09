export type Locale = (typeof locales)[number];

export const locales = ['en', 'sr'] as const;
export const defaultLocale: Locale = 'en';
