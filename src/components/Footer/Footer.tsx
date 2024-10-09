import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import Button from '../UI/Button';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer id='footer' className={styles.footer}>
      <h1 className={styles.footer__title}>
        <span>{t('title.one')}</span>
        <span>{t('title.two')}</span>
      </h1>

      <div className={styles.footer__content}>
        <div className={styles.footer__content__left}>
          <p className={styles.footer__content__subtitle}>
            {t('subtitle.one')} <span>{t('subtitle.two')}</span>{' '}
            {t('subtitle.three')} <span>{t('subtitle.four')}</span>
          </p>

          <Button variant='secondary'>
            <a href='mailto:contact@realvibestudio.yahoo'>
              contact@realvibestudio.yahoo
            </a>
          </Button>
        </div>

        <div className={styles.footer__content__socials}>
          <p className={styles.footer__content__socials__title}>
            {t('socials.title.one')}
            <span>{t('socials.title.two')}</span>
          </p>

          <div className={styles.footer__content__socials__items}>
            <a href='https://instagram.com' target='_blank'>
              Instagram
            </a>
            <a href='https://tiktok.com' target='_blank'>
              TikTok
            </a>
          </div>
        </div>
      </div>
      <Button variant='secondary'>
        <a href='mailto:contact@realvibestudio.yahoo'>Contact Us</a>
      </Button>
    </footer>
  );
};

export default Footer;
