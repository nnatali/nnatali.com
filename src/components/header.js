import * as React from 'react'

import {
  header,
  headerLogo,
  headerTitle
} from './header.module.sass'

const Header = ({ title, children }) => {
  
  return (
    <header className={header}>
      {children}
      <h1 className={headerLogo}>
        <span>Nelly</span> <span>Natalí</span>
      </h1> 
      <h2 className={headerTitle}>{title}</h2>
    </header>
  )
}

export default Header