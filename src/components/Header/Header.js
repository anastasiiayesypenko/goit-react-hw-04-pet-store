import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <NavLink
          exact
          activeClassName={styles.activeLink}
          className={styles.NavLink}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          activeClassName={styles.activeLink}
          className={styles.NavLink}
          to="/pets"
        >
          Pets
        </NavLink>

        <NavLink
          activeClassName={styles.activeLink}
          exact
          className={styles.NavLink}
          to="/about"
        >
          About
        </NavLink>
      </ul>
    </nav>
  </header>
);
export default Header;
