import React from 'react';
import CustomLink from './CustomLink';

import './NavBar.module.css';

import ServiceSVG from '../../assets/svgs/ServicesSVG';
import SpaSVG from '../../assets/svgs/SpaSVG';
import RingsSVG from '../../assets/svgs/RingsSVG';
import BookSVG from '../../assets/svgs/BookSVG';
import ContactSVG from '../../assets/svgs/ContactSVG';

const NavBar = () => {
  return (
    <nav>
      <CustomLink svg={<ServiceSVG />} path="servicos" name="Serviços" />
      <CustomLink svg={<SpaSVG />} path="spa" name="Spa" />
      <CustomLink svg={<RingsSVG />} path="noiva" name="Dia de Noiva" />
      <CustomLink svg={<BookSVG />} path="cursos" name="Cursos" />
      <CustomLink svg={<ContactSVG />} path="contato" name="Agenda e Contato" />
    </nav>
  );
};

export default NavBar;
