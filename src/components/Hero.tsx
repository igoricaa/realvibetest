'use client';

import { useTranslations } from 'next-intl';
import  Link  from 'next/link';
import Image from 'next/image';
import heroImage from '../../public/hero-image.png';
import { useScroll, motion, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import { useRef, useEffect, useState } from 'react';
import Button from './UI/Button';
import BackgroundGradient from './UI/BackgroundGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import ArrowIcon from './UI/icons/ArrowIcon';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const updateViewportDimensions = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(document.body.clientWidth);
    };

    const updateImageHeight = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    };

    updateViewportDimensions();
    updateImageHeight();

    window.addEventListener('resize', updateViewportDimensions);
    window.addEventListener('resize', updateImageHeight);

    return () => {
      window.removeEventListener('resize', updateViewportDimensions);
      window.removeEventListener('resize', updateImageHeight);
    };
  }, []);

  const animationDuration = 0.5;

  const animationProgress = useTransform(
    scrollYProgress,
    [0, animationDuration],
    [0, 1],
    { clamp: true }
  );

  const opacityFast = useTransform(scrollYProgress, [0, 0.1], [1, 0], {
    clamp: true,
  });

  const opacitySlow = useTransform(scrollYProgress, [0, 0.2], [1, 0], {
    clamp: true,
  });

  const imageScale = useTransform(
    animationProgress,
    [0, 1],
    [1, Math.max(1, viewportWidth / 638)]
  );

  const yPositionUp = useTransform(
    animationProgress,
    [0, 1],
    [0, -viewportHeight]
  );

  const yPositionDown = useTransform(
    animationProgress,
    [0, 1],
    [0, (viewportHeight - imageHeight) / 2]
  );

  const xPosition = useTransform(animationProgress, [0, 1], [0, 100]);

  const t = useTranslations('home.hero');

  return (
    <>
      <BackgroundGradient />
      <div className={styles.hero} ref={heroRef}>
        <motion.div
          className={styles.hero__content}
          style={{
            opacity: isMobile ? 1 : opacityFast,
            y: isMobile ? 0 : yPositionUp,
          }}
        >
          <h1 className={styles.hero__title}>
            <span>{t('title.one')}</span>
            <span>{t('title.two')}</span>
          </h1>
          <p className={styles.hero__subtitle}>
            {t('subtitle.one')} <span>{t('subtitle.two')}</span>{' '}
            {t('subtitle.three')} <span>{t('subtitle.four')}</span>
          </p>
          <Button variant='secondary'>
            <Link href='/contact'>{t('cta')}</Link>
          </Button>
        </motion.div>

        <motion.div
          className={styles.hero__image}
          style={{
            scale: isMobile ? 1 : imageScale,
            y: isMobile ? 0 : yPositionDown,
            x: isMobile ? 0 : xPosition,
          }}
        >
          <motion.div
            ref={imageTextRef}
            className={styles.hero__image__text}
            style={{
              opacity: isMobile ? 1 : opacityFast,
            }}
          >
            <h6>{t('demo.title')}</h6>
            <p dangerouslySetInnerHTML={{ __html: t('demo.description') }} />
          </motion.div>
          <Image
            ref={imageRef}
            src={heroImage}
            alt='RealVibe hero image'
            fill
            sizes='(max-width: 768px) 257px, 638px'
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>

        <motion.div
          className={styles.scrollDown}
          style={{ opacity: opacitySlow }}
        >
          <p>Scroll Down</p>
          <ArrowIcon />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
