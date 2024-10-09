import { useTranslations } from 'next-intl';
import styles from './ContactSection.module.scss';
import { Link } from '@/i18n/routing';
import Button from './UI/Button';

const ContactSection = () => {
  const t = useTranslations('home.contact');

  return (
    <section className={styles.contact}>
      <h2>{t('title')}</h2>
      <Button>
        <Link href='/contact'>{t('linkText')}</Link>
      </Button>
    </section>
  );
};

export default ContactSection;
