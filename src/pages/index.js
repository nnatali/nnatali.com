import React, { Suspense, lazy } from 'react';
import { Script } from 'gatsby';
import SiteSEO from '../components/Seo';
import Layout from '../components/Layout';
import About from '../components/About';

const Portfolio = lazy(() => import('../components/Portfolio'));

const IndexPage = () => {
  
  return (
    <Layout title="Front-end developer">
      <About />
      <Suspense>
        <Portfolio />
      </Suspense>
      <Script id="script-lines-id" strategy="idle" src="/scripts/lines.js" />
    </Layout>
  )
}

export const Head = () => (
  <SiteSEO />
)

export default IndexPage;
