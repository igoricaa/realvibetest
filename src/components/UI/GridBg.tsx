import Image from 'next/image';
import styles from './GridBg.module.scss';

const GridBg = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
      }}
    >
      <Image
        src='/grid-bg.png'
        alt='Grid background'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default GridBg;
