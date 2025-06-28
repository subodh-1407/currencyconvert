import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>Currency Converter</div>
    </header>
  );
}

export default Header;
