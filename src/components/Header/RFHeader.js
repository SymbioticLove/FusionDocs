import React from 'react';
import { useSelector } from 'react-redux';

import { useTheme } from '../../themes/ThemeContext';

import styles from './RFHeader.module.css';

const RFHeader = () => {
  const { theme } = useTheme();
  const data = useSelector(state => state.about.header);

  return (
    <div className={`${styles.header} ${theme}`}>
      <div className={styles.logoContainer}>
        <img src={data.image} alt={data.logoAlt} />
      </div>
      <div className={styles.search}></div>
      <div className={styles.container}>
        <div className={styles.nav}></div>
        <div className={styles.modeSwitch}></div>
        <div className={styles.ghContainer}>
          <img src={data.image2} alt={data.githubAlt} />
        </div>
      </div>
    </div>
  );
};

export default RFHeader;
