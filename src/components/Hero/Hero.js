import React from 'react';
import { useSelector } from 'react-redux';

import { useTheme } from '../../themes/ThemeContext';

import styles from './Hero.module.css';

const Hero = () => {
  const { theme } = useTheme();
  const data = useSelector(state => state.about.hero);

  return (
    <div className={`${styles.banner} ${theme}`}>
      <div className={styles.inner}>
        <img src={data.logo} alt="logo" />
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <div>
          <button>Learn Fusion</button>
          <button>Follow Along</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
