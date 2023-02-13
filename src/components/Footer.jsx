import React from 'react';
import { footer, text } from './Footer.module.sass';

function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className={footer}>
      <p className={text}>&copy; {year}. No tracking or ads.</p>
    </footer>
  )
}

export default Footer;