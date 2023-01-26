import * as React from 'react';
import * as styles from './Footer.module.sass';

function Footer({ children }) {

  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  )
}

export default Footer;