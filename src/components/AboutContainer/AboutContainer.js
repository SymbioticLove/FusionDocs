import React from 'react';
import { useSelector } from 'react-redux';
import About from '../About/About';
import styles_light from './Light.module.css';
import styles_dark from './Dark.module.css';

const AboutContainer = () => {
  const sec1Data = useSelector(state => state.about.about);
  const sec2Data = useSelector(state => state.about.technology);
  const sec3Data = useSelector(state => state.about.progress);
  const sec4Data = useSelector(state => state.about.setupTool);

  return (
    <div>
      <About data={sec1Data} styles={styles_dark} />
      <About data={sec2Data} styles={styles_light} />
      <About data={sec3Data} styles={styles_dark} />
      <About data={sec4Data} styles={styles_light} />
    </div>
  );
};

export default AboutContainer;
