import { useTranslations } from 'next-intl';
import styles from './About.module.scss';
import Link from 'next/link';
import AboutSlider from './HorizontalSlider/AboutSlider';
import Button from '../UI/Button';

const About = () => {
  const t = useTranslations('home.about');

  return (
    <section className={styles.about}>
      <div className={styles.about__header}>
        <h2>{t('title')}</h2>
        <Button>
          <Link href={'/contact'}>{t('cta')}</Link>
        </Button>
        <div className={styles.about__description}>
          <p>{t('description')}</p>
        </div>
      </div>

      <AboutSlider />
    </section>
  );
};

export default About;
