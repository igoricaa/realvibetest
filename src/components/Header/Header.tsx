import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '@/../public/realvibe-logo.svg';
import  Link  from 'next/link';
import { useTranslations } from 'next-intl';
import SideArea from './SideArea';
import ThemeSwitcher from '../UI/ThemeSwitcher';
import BurgerIcon from '../UI/icons/BurgerIcon';
import LocaleSwitcher from '../UI/LocaleSwitcher';

const Header = () => {
  const t = useTranslations('nav.menu');

  const routes = [
    { href: '/', label: t('home') },
    { href: '/about-us', label: t('about') },
    { href: '/events', label: t('events') },
    { href: '/video-production', label: t('video-production') },
    { href: '/contact', label: t('contact') },
  ];

  // const handleClick = () => {
  //   console.log('clicked');
  // };

  return (
    <header id='header' className={styles.header}>
      <div className={styles.header__helper__wrapper}>
        <div className={styles.header__logoWrapper}>
          <Image src={logo} alt='Real Vibe Production logo' fill priority />
        </div>
        <ThemeSwitcher />
      </div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__desktopMenu}>
          {routes.map((route) => (
            <li
              className={styles.header__nav__desktopMenu__item}
              key={route.href}
            >
              <Link href={route.href as any}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
        <SideArea />
      </nav>
      <nav className={styles.header__nav__mobile}>
        <div className={styles.header__nav__mobile__menuWrapper}>
          <ul className={styles.header__nav__mobile__menu}>
            {routes.map((route) => (
              <li
                className={styles.header__nav__mobile__menu__item}
                key={route.href}
              >
                <Link href={route.href as any}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <BurgerIcon />
      </nav>
    </header>
  );
};

export default Header;
