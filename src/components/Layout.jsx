import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dory from '../components/Dory';
import Cursor from '../components/Cursor';
import CursorContextProvider from '../contexts/cursor-context-provider';
import * as styles from './Layout.module.sass';

function Layout({ title, children }) {

  return (
    <CursorContextProvider>
      <Header title={title} />
      <main className={styles.main}>
        {children}
      </main>
      <Dory />
      <Footer />
      <Cursor />
    </CursorContextProvider> 
  )
}

export default Layout;