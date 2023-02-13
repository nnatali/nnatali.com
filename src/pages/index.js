import React from 'react';
import { Script } from 'gatsby';
import SiteSEO from '../components/Seo';
import Layout from '../components/Layout';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

const IndexPage = () => {
  
  return (
    <Layout title="Front-end developer">
      <About />
      <Portfolio />
      <Script id="script-lines-id" strategy="idle" src="/scripts/lines.js" />
    </Layout>
  )
}

export const Head = () => (
  <SiteSEO />
)

export default IndexPage;
