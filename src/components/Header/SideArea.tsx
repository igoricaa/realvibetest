'use client';

import { useTranslations } from 'next-intl';
import styles from './SideArea.module.scss';
import Image from 'next/image';
import featuredProject from '@/../public/featured-project.png';
import XIcon from '../UI/icons/XIcon';
import { services, Service } from '@/data';
import Button from '../UI/Button';
import { useEffect, useRef, useState, useCallback } from 'react';
import BurgerIcon from '../UI/icons/BurgerIcon';

const SideArea = () => {
  const t = useTranslations('nav.sidearea');
  const [isOpen, setIsOpen] = useState(false);
  const sideAreaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleSideArea = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    document.body.classList.toggle('translated');
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target instanceof Element) {
        const overlay = overlayRef.current;
        const sidearea = sideAreaRef.current;
        if (
          sidearea &&
          !sidearea.contains(event.target) &&
          overlay?.contains(event.target)
        ) {
          toggleSideArea();
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, toggleSideArea]);

  return (
    <section className={styles.sidearea__wrapper}>
      <BurgerIcon onClick={toggleSideArea} />
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        data-lenis-prevent
        ref={overlayRef}
      ></div>
      <div
        id='sidearea'
        ref={sideAreaRef}
        className={`${styles.sidearea} ${isOpen ? styles.open : ''}`}
        data-lenis-prevent
      >
        <XIcon color='#fff' onClick={toggleSideArea} />
        <div className={styles.sidearea__contentWrapper}>
          <h4 className={styles.sidearea__title}>
            {t('title.one')} <span>{t('title.two')}</span>
          </h4>
          <Image
            src={featuredProject}
            alt='Real Vibe Featured Project'
            width={532}
            height={342}
            className={styles.sidearea__image}
          />
          <div className={styles.sidearea__content}>
            <div className={styles.sidearea__services}>
              <h5 className={styles.sidearea__services__title}>
                {t('services.title.one')} <span>{t('services.title.two')}</span>
              </h5>
              <ul className={styles.sidearea__services__list}>
                {services.map((service: Service, index: number) => (
                  <li
                    key={service.title}
                    className={`${styles.sidearea__services__list__item} ${
                      styles[`sidearea__services__list__item__${service.title}`]
                    }`}
                  >
                    <a href=''>
                      <i>
                        <Image
                          src={service.icon}
                          alt={t(`services.service-${index + 1}.title`)}
                          width={24}
                          height={24}
                        />
                      </i>
                      <span>{t(`services.service-${index + 1}.title`)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.sidearea__socials}>
              <h5 className={styles.sidearea__socials__title}>
                {t('socials.title.one')} <span>{t('socials.title.two')}</span>
              </h5>
              <ul className={styles.sidearea__socials__list}>
                <li className={styles.sidearea__socials__list__item}>
                  <a
                    href='https://www.instagram.com/realvibestudio/'
                    target='_blank'
                  >
                    Instagram
                  </a>
                </li>
                <li className={styles.sidearea__socials__list__item}>
                  <a
                    href='https://www.tiktok.com/@realvibestudio'
                    target='_blank'
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Button>
          <a href='/contact'>{t('cta')}</a>
        </Button>
      </div>
    </section>
  );
};

export default SideArea;
