import React from 'react';
import styles from './Courses.module.css';

import cover from '../../assets/courses/cover.jpeg';
import Footer from '../../Components/Footer/Footer';

const Courses = () => {
  return (
    <section className={`${styles.sec} animeLeft`}>
      <img src={cover} alt="Cursos" className={styles.img} />
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Cursos</h1>
        <p className={styles.text}>O famoso 'faça você mesma'!</p>
      </div>
      <div className={styles.content}>
        <h3>Faça você mesma!</h3>
        <p>
          Já imaginou aprender tudo aquilo que você sempre viu nos salões,
          tutoriais do youtube e as tendências de todas as blogueiras? Então
          agora você pode! Aqui na CL nós te oferecemos diversos cursos para
          você ampliar o seu leque de conhecimento e ficar ainda mais incrível!
          Dessa forma, você pode abrir seu próprio negócio, ampliar seu
          portfolio ou, simplesmente, se divertir com suas amigas! Venha já
          conferir!
        </p>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </section>
  );
};

export default Courses;
