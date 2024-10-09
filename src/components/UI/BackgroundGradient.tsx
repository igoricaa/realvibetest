'use client';

import { useEffect } from 'react';
import styles from './BackgroundGradient.module.scss';

const BackgroundGradient = () => {
//   useEffect(() => {
//     debugger;

//     const interBubble = document.querySelector<HTMLDivElement>(`.interactive`)!;
//     let curX = 0;
//     let curY = 0;
//     let tgX = 0;
//     let tgY = 0;

//     function move() {
//       curX += (tgX - curX) / 20;
//       curY += (tgY - curY) / 20;
//       interBubble.style.transform = `translate(${Math.round(
//         curX
//       )}px, ${Math.round(curY)}px)`;
//       requestAnimationFrame(() => {
//         move();
//       });
//     }

//     window.addEventListener('mousemove', (event) => {
//       tgX = event.clientX;
//       tgY = event.clientY;
//     });

//     move();

//     return () => {
//       window.removeEventListener('mousemove', () => {});
//     };
//   }, []);

  return (
    <div className={styles.gradient__bg}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className={styles.gradient__bg__container}>
        {/* <div className={styles.gradient__bg__g1}></div>
        <div className={styles.gradient__bg__g2}></div> */}
        <div className={styles.gradient__bg__g3}></div>/
        {/* <div className={styles.gradient__bg__g5}></div> */}
        {/* className={`${styles.gradient__bg__interactive} interactive`} */}
      </div>
    </div>
  );
};

export default BackgroundGradient;
