import * as React from 'react';
import { Script } from 'gatsby';
import SiteSEO from '../components/Seo';
import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';

const IndexPage = () => {
  
  return (
    <Layout title="Front-end developer">
      <About />
      <Projects />
      <Script id="script-lines-id" strategy="idle" src="/scripts/lines.js" />
    </Layout>
  )
}

export const Head = () => (
  <SiteSEO />
)

export default IndexPage;
