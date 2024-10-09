'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './WhyUsItem.module.scss';

const WhyUsItem = ({ index, messages }: { index: number; messages: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={`${styles.whyUs__reason} ${
        styles[`whyUs__reason__${index + 1}`]
      } ${isInView ? styles.inView : ''}`}
      key={index}
    >
      <h4>
        <span>{messages.title.one} </span>
        <br />
        <span>{messages.title.two} </span>
        <span>{messages.title.three}</span>
      </h4>
      <p>{messages.description}</p>
    </div>
  );
};

export default WhyUsItem;
