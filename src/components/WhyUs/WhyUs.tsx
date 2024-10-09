import { useTranslations } from 'next-intl';
import styles from './WhyUs.module.scss';
import WhyUsItem from './WhyUsItem';

const WhyUs = () => {
  const t = useTranslations('home.why-us');

  const messages = Array.from({ length: 4 }, (_, index) => ({
    title: {
      one: t(`reasons.reason-${index + 1}.title.one`),
      two: t(`reasons.reason-${index + 1}.title.two`),
      three: t(`reasons.reason-${index + 1}.title.three`),
    },
    description: t(`reasons.reason-${index + 1}.description`),
  }));

  return (
    <section className={styles.whyUs}>
      <h2>{t('title')}</h2>

      <div className={styles.whyUs__reasons}>
        {Array.from({ length: 4 }, (_, index) => {
          return (
            <WhyUsItem key={index} index={index} messages={messages[index]} />
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
