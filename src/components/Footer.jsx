import * as React from 'react';
import { footer } from './Footer.module.sass';

function Footer({ children }) {

  return (
    <footer className={footer}>
      {children}
    </footer>
  )
}

export default Footer;