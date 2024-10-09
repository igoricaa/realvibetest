'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.scss';
import DarkJarIcon from './icons/DarkJarIcon';
import LightJarIcon from './icons/LightJarIcon';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.switcher}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span
        className={`${styles.icon} ${theme === 'light' ? styles.active : ''}`}
      >
        <LightJarIcon />
      </span>
      <span
        className={`${styles.icon} ${theme === 'dark' ? styles.active : ''}`}
      >
        <DarkJarIcon />
      </span>
      <span
        className={`${styles.slider} ${
          theme === 'dark' ? styles.sliderRight : ''
        }`}
      />
    </button>
  );
}
