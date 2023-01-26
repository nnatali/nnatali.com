import * as React from 'react';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import * as styles from './Header.module.sass';

function Header({ title, children }) {
  const cursorHandlers = useCursorHandlers();

  return (
    <header id="header" className={styles.header} {...cursorHandlers}>
      {children}
      <h1 className={styles.logo}>
        <span>Nelly</span> <span>Natalí</span>
      </h1> 
      <h2 className={styles.title}>{title}</h2>
    </header>
  )
}

export default Header;