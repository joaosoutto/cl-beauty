import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ src, alt, name, path }) => {
  return (
    <Link to={`/servicos/${path}`}>
      <div className={styles.card}>
        <img className={styles.img} alt={alt} src={src} />
        <h3 className={styles.name}>{name}</h3>
      </div>
    </Link>
  );
};

export default ServiceCard;
