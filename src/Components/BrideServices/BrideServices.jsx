import React from 'react';
import styles from './BrideServices.module.css';

const BrideServices = ({ src, alt, name }) => {
  return (
    <div className={styles.div}>
      <h4 className={styles.name}>{name}</h4>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

export default BrideServices;
