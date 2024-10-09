'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import styles from './MaskAnimation.module.scss';

const MaskAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);

    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  const initialMaskSize =
    Math.min(viewportSize.width, viewportSize.height) * 0.1;
  const maxMaskSize = Math.sqrt(
    Math.pow(viewportSize.width, 2) + Math.pow(viewportSize.height, 2)
  );

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const maskSize = useTransform(
    smoothProgress,
    [0, 1],
    [initialMaskSize, maxMaskSize]
  );
  const clipPathValue = useMotionValue(
    `circle(${initialMaskSize}px at 50% 50%)`
  );

  const imageBrightness = useTransform(smoothProgress, [0, 1], [100, 150]);

  useEffect(() => {
    const unsubscribe = maskSize.on("change", (v) => {
      clipPathValue.set(`circle(${v}px at 50% 50%)`);
    });
    return unsubscribe;
  }, [maskSize, clipPathValue]);

  return (
    <div ref={containerRef} className={styles.mask}>
      <div className={styles.content}>
        <motion.div
          className={styles.content__img}
          style={{
            filter: `brightness(${imageBrightness}%)`,
            clipPath: clipPathValue,
          }}
        />
      </div>
    </div>
  );
};

export default MaskAnimation;
