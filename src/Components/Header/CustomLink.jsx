import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './CustomLink.module.css';

const CustomLink = ({ svg, path, name }) => {
  return (
    <NavLink
      to={`/${path}`}
      className={styles.link}
      activeClassName={styles.active}
    >
      <div className={styles.custom}>
        {svg}
        <p className={styles.name}>{name}</p>
      </div>
    </NavLink>
  );
};

export default CustomLink;
