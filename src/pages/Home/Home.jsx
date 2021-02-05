import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Slides from '../../Components/Slides/Slides';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <Slides />
      </section>
      <Footer />
    </>
  );
};

export default Home;
