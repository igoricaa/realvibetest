import { UrlObject } from 'url';

type MenuItem = {
  label: string;
  href: string;
};

export const routes: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Event Organization',
    href: '/event-organization',
  },
  {
    label: 'Video Production',
    href: '/video-production',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export type Service = {
  title: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    title: 'Event Organization',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
  {
    title: 'CONCEPTING AND SCREENING AD CAMPAIGNS',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
  {
    title: 'FILM PRODUCTION',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
  {
    title: 'PRODUCING MUSIC VIDEOS',
    icon: '/services/film-production-icon.svg',
    image: '/services/film-production.png',
  },
];
