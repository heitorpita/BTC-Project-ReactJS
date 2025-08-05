import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} BTC Price Dashboard. Todos os direitos reservados.</p>
      <div className={styles.links}>
        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </div>
    </footer>
  );
}

export default Footer;
