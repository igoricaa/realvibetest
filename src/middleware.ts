import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/', '/(sr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
  //   matcher: ['/((?!api|_next|.*\\..*).*)'],
};
