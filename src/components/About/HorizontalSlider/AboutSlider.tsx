'use client';

import Image from 'next/image';
import styles from './AboutSlider.module.scss';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/UI/Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useInView } from 'framer-motion';

type CompanyValue = {
  title: string;
  image: string;
  icon: string;
};

const companyValues: CompanyValue[] = [
  {
    title: 'Naša misija',
    image: '/about/our-mission.png',
    icon: '/about/our-mission-icon.svg',
  },
  {
    title: 'Naša misija',
    image: '/about/vision.png',
    icon: '/about/our-mission-icon.svg',
  },
  {
    title: 'Naša misija',
    image: '/about/team.png',
    icon: '/about/our-mission-icon.svg',
  },
  {
    title: 'Naša misija',
    image: '/about/partners.png',
    icon: '/about/our-mission-icon.svg',
  },
];

const AboutSlider = () => {
  const t = useTranslations('home.about.company-values');
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const isMobile = useMediaQuery('(max-width: 768px)');

  const x = useTransform(scrollYProgress, [0, 1], ['0', '-80%']);

  return (
    <section ref={targetRef} className={styles.about__slider}>
      <div className={styles.about__slider__container}>
        <motion.div
          style={{ x: isMobile ? 0 : x }}
          className={styles.about__slider__content}
        >
          {companyValues.map((value, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <div
                key={index}
                ref={ref}
                className={`${styles.about__slider__item} ${
                  isInView ? styles.inView : ''
                }`}
              >
                <div className={styles.about__slider__item__image}>
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    sizes='(max-width: 768px) 75vw, 448px'
                  />
                </div>
                <div className={styles.about__slider__item__content}>
                  <div className={styles.about__slider__item__content__icon}>
                    <Image src={value.icon} alt={value.title} fill />
                  </div>
                  <h4 className={styles.about__slider__item__content__title}>
                    {t('our-mission.title.one')}
                    <span>{t('our-mission.title.two')}</span>
                  </h4>
                  <p>{t('our-mission.description')}</p>
                  <Button variant='secondary'>
                    <Link href={'/contact'}>{t('our-mission.cta')}</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSlider;
