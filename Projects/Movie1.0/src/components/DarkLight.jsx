import React, { useState, useEffect } from 'react';
import styles from './css/DarkLight.module.css';

const DarkLight = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'lightMode');

  useEffect(() => {
    document.documentElement.setAttribute('theme-setting', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'lightMode' ? 'darkMode' : 'lightMode'));
  };

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.ball}></div>
    </div>
  );
};

export default DarkLight;
