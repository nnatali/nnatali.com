import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Nav.module.sass'
import IconExternal from '../images/icon-external.inline.svg';

function Nav({ children }) {

  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">Home</Link> 
      <a className={styles.link} href="https://twitter.com/nnatali" target="_blank" rel="noopener noreferrer">
        <IconExternal />
        Twitter
      </a>
      { children }
    </nav>
  )
}

export default Nav