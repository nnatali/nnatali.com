import React from 'react';
import SiteSEO from '../components/Seo';
import Layout from '../components/Layout';
import Error from '../components/Error';

const IndexPage = () => {
  
  return (
    <Layout title="Front-end developer">
      <Error />
    </Layout>
  )
}

export const Head = () => (
  <SiteSEO />
)

export default IndexPage;
