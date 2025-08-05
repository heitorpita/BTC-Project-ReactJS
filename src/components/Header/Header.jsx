import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>BTC PRICE DASHBOARD</h1>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Mercado</li>
          <li>Sobre</li>
          <li>
            <button className={styles.btn}>⚙️</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
