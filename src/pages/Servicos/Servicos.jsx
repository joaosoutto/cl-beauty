import React from 'react';
import ServiceCard from '../../Components/Servicos/ServiceCard';
import styles from './Servicos.module.css';

import hair from '../../assets/servicos/hair.png';
import makeup from '../../assets/servicos/makeup.png';
import nail from '../../assets/servicos/nail.png';
import eyebrow from '../../assets/servicos/eyebrow.png';

const Servicos = () => {
  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.servicos}>
        <ServiceCard src={hair} alt="hair logo" name="Cabelo" path="cabelos" />
        <ServiceCard src={makeup} alt="makeup logo" name="Maquiagem" path="maquiagens" />
        <ServiceCard src={nail} alt="nail logo" name="Unhas" path="unhas" />
        <ServiceCard src={eyebrow} alt="eyebrow logo" name="Sombrancelha" path="sombrancelhas" />
      </div>
    </section>
  );
};

export default Servicos;
