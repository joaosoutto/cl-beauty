import React from 'react';
import styles from './Spa.module.css';

import Footer from '../../Components/Footer/Footer';

import cover from '../../assets/spa/cover.jpeg';
import SpaServices from '../../Components/SpaServices/SpaServices';

import massage from '../../assets/spa/massage1.png';
import rocks from '../../assets/spa/rocks.png';
import aroma from '../../assets/spa/aroma.png';
import escaldo from '../../assets/spa/escaldo.png';
import acu from '../../assets/spa/acu.png';
import sauna from '../../assets/spa/sauna.png';

const Spa = () => {
  return (
    <section className={`${styles.sec} animeLeft`}>
      <img src={cover} alt="Spa" className={styles.img} />
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Spa</h1>
        <p className={styles.text}>Conecte-se de volta consigo mesma.</p>
      </div>
      <div className={styles.content}>
        <SpaServices
          src={massage}
          alt="massage"
          name="Massagens"
          text="A massagem é uma das primeiras formas de tratamento estético utilizadas em várias civilizações antigas. Para quem busca bem estar e beleza, oferecemos as mais variadas técnicas."
        />
        <SpaServices
          src={aroma}
          alt="aroma"
          name="Aromaterapia"
          text="Técnica natural que utiliza o aroma e as partículas liberadas por diferentes óleos essenciais para estimular diferentes partes do cérebro, promovendo o bem estar e as defesas do corpo."
        />
        <SpaServices
          src={escaldo}
          alt="escaldo"
          name="Escaldo de pés"
          text="Tratamento com ervas e folhas para escaldar os pés, proporcionando um relaxamento intenso em todo o corpo e eliminando as energias pesadas e negativas acumuladas em nosso dia a dia. "
        />
        <SpaServices
          src={rocks}
          alt="rocks"
          name="Pedras Quentes"
          text="Tratamento com pedras e sais minerais quentes, proporcionando um alívio imediato em dores e auxiliando no rejuvenescimento dos corpo e dos músculos. Excelente para se reencontrar. "
        />
        <SpaServices
          src={acu}
          alt="acu"
          name="Acupuntura"
          text=" Técnica milenar tradicional chinesa. Os benefícios desse tratamento têm sido cada vez mais reconhecidos. Utilizada para cuidar de diversas áreas da saúde humana, incluindo a saúde mental."
        />{' '}
        <SpaServices
          src={sauna}
          alt="sauna"
          name="Banho de Vapor"
          text="Tratamento focado na abertura dos poros e purificação do corpo, utilizando vapor e aromas que vão reenergizar sua deusa interior. "
        />
      </div>
      <Footer />
    </section>
  );
};

export default Spa;
