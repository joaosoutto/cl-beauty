import React from 'react';
import styles from './Bride.module.css';

import Footer from '../../Components/Footer/Footer';

import bride from '../../assets/bride/bride.jpeg';
import bridesmaid from '../../assets/bride/bridesmaid.jpeg';
import BrideServices from '../../Components/BrideServices/BrideServices';

import hair from '../../assets/bride/hair.png';
import makeup from '../../assets/bride/makeup.png';
import nail from '../../assets/bride/nail.png';
import massage from '../../assets/bride/massage.png';
import sauna from '../../assets/bride/sauna.png';
import drinks from '../../assets/bride/drinks.png';

const Bride = () => {
  return (
    <section className={`${styles.sec} animeLeft`}>
      <img src={bride} alt="Noiva" className={styles.img} />
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Dia de Noiva</h1>
        <p className={styles.text}>Para te ajuda nesse momento tão especial!</p>
      </div>
      <div className={styles.content}>
        <h3>Finalmente, o grande dia chegou!</h3>
        <p>
          Depois de todo estresse causado pelos preparativos do casamento, nada
          melhor — e mais justo — que tirar um tempinho para você antes do sim.
          A proposta aqui é, além de te deixar pronta para o casamento, fazer
          com que você relaxe e se divirta muito!
        </p>
        <br />
        <p>
          Por isso, chame as amigas, madrinhas, sua mãe e venha conhecer como
          funciona o seu dia aqui com a gente!{' '}
        </p>
        <img src={bridesmaid} alt="Madrinhas" className={styles.img2} />
        <h3>Conte com os seguintes serviços:</h3>
        <BrideServices src={hair} alt="hair" name="Cabelo" />
        <BrideServices src={makeup} alt="makeup" name="Maquiagem" />
        <BrideServices src={nail} alt="nail" name="Manicure" />
        <BrideServices src={massage} alt="massage" name="Massagem" />
        <BrideServices src={sauna} alt="sauna" name="Banho de Rosas" />
        <BrideServices src={drinks} alt="drinks" name="Drinks e Champagne" />
      </div>
      <Footer />
    </section>
  );
};

export default Bride;
