import React from 'react';
import styles from './SpaServices.module.css';

const SpaServices = ({ src, alt, name, text }) => {
  return (
    <div className={styles.one}>
      <div className={styles.imgDiv}>
        <img className={styles.img} alt={alt} src={src} />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SpaServices;
