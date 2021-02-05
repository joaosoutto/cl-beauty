import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ src, alt, title, text, end }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.img} />
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <p className={styles.end}>{end}</p>
      </div>
    </div>
  );
};

export default Slide;
