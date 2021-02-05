import React from 'react';
import Slides from '../../Components/Slides/Slides';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <Slides />
    </section>
  );
};

export default Home;
