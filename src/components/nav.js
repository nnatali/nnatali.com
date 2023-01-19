import React from 'react'

import { Link } from 'gatsby'

import {
  nav,
  navLink
} from './nav.module.sass'

import IconExternal from "../images/icon-external.inline.svg";

const Nav = ({ children }) => {
  return (
    <nav className={nav}>
      <Link className={navLink} to="/">Home</Link> 
      <a className={navLink} href="https://twitter.com/nnatali" target="_blank" rel="noopener noreferrer">
        <IconExternal />
        Twitter
      </a>
      { children }
    </nav>
  )
}

export default Nav