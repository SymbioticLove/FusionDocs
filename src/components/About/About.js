import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../themes/ThemeContext';

const About = ({ styles, data }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.aboutContainer} ${theme}`}>
      <h2>{data.title}</h2>
      <p>{data.upperText}</p>
      <img src={data.image} alt={data.imageAlt} />
      <p>{data.lowerText}</p>
    </div>
  );
};

About.propTypes = {
  styles: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default About;
