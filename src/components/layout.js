import * as React from 'react'

import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

import { 
  layoutMain
} from './layout.module.sass'

const Layout = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main className={layoutMain}>
        {children}
      </main>
      <Footer>
        <Nav />
      </Footer>
    </>
  )
}

export default Layout