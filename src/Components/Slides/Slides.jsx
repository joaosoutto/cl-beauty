import React from 'react';
import Slider from 'infinite-react-carousel';
import Slide from './Slide';

import styles from './Slides.module.css';

import hair from '../../assets/photos/1.jpg';
import spa from '../../assets/photos/spa1.jpg';
import bride from '../../assets/photos/noiva1.jpg';
import makeup from '../../assets/photos/makeup1.jpeg';
import nails from '../../assets/photos/manicure.jpg';
import courses from '../../assets/photos/cursos1.jpeg';
import model from '../../assets/photos/model.jpg';

const Slides = () => {
  return (
    <section className={`${styles.carouselSec} animeLeft`}>
      <Slider autoplay={true}>
        <Slide
          src={hair}
          alt="Cabelereira"
          title="Cortes Profissionais"
          text="Os mais variados cortes para você, feitos pelas nossas melhores profissionais do salão! Saia daqui uma nova mulher!"
          end="O que está esperando?"
        />
        <Slide
          src={spa}
          alt="Spa"
          title="Spa Day"
          text="Cansada da correria do dia a dia? Não aqui! Aqui você tem Spa Day com diversos serviços, desde massagem até aromaterapia!"
          end="Venha se cuidar com a gente!"
        />
        <Slide
          src={bride}
          alt="bride"
          title="Dia de Noiva"
          text="Está chegando o grande momento! Preparada? Se não, a gente prepara tuuuudo pra você e ainda lhe serve um delicioso champagne!"
          end="Vamos celebrar o amor!"
        />
        <Slide
          src={makeup}
          alt="Makeup"
          title="Maquiagem"
          text="Que você é linda todos os dias, nós já sabemos! Mas tem dia que o cansaço pega forte, não é mesmo? Vem cá que a gente joga sua auto estima lá pro alto!"
          end="Volte a se amar!"
        />
        <Slide
          src={nails}
          alt="Manicure"
          title="Manicure"
          text="Afim de dar aquela diferenciada nas unhas? Colocar as garras dessa leoa pra fora? Deixa com a gente que cuidamos de tudo pra você!"
          end="Raaaawr!"
        />
        <Slide
          src={courses}
          alt="Maquiagem"
          title="Cursos"
          text="Talvez você já seja linda o suficiente e a única coisa que podemos fazer por você é ensinar a deixar suas companheiras igualmente lindas! Por isso temos vários cursos e workshops!"
          end="Não fique de fora dessa!"
        />

        <Slide
          src={model}
          alt="HAir"
          title="E muito mais!"
          text="Venha conferir! Ainda contamos com depilação, sombrancelha, preenchimentos, e todos os procedimentos pra você acordar essa deusa interior!"
          end="Não perca tempo, venha ficar ainda mais incrível!"
        />
      </Slider>
    </section>
  );
};

export default Slides;
