import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../assets/logos/cl.png';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className={styles.imgDiv}>
        <Link to="/">
          <img src={logo} alt="CL's logo" />
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
