import React from 'react';
import styles from './Footer.module.css';

import ClLogo from '../../assets/logos/logo1.png';
import logo from '../../assets/footer/logo_robot.png';
import LinkedinSVG from '../../assets/svgs/LinkedinSVG';
import GHSVG from '../../assets/svgs/GHSVG';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cl}>
        <img src={ClLogo} alt="CL's logo" />
        <p>CL Beauty Center. Some rights reserved</p>
      </div>
      <div className={styles.more}>
        <a href="https://soutto.herokuapp.com/" target="blank">
          <img className={styles.logo} alt="logo" src={logo} />
        </a>
        <a href="https://www.linkedin.com/in/joaosoutto/" target="blank">
          <LinkedinSVG />
        </a>
        <a href="https://github.com/joaosoutto" target="blank">
          <GHSVG />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
