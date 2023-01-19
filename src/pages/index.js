import * as React from 'react'
import { Script } from "gatsby"
import Layout from '../components/layout'
import { SiteSEO } from "../components/seo"

const IndexPage = () => {
  const VisibleTitle = 'Front-end developer'
  return (
    <Layout title={VisibleTitle}>
      <Script id="second-unique-id" strategy="idle">{`console.log('Hello world')`}</Script>
      {/* <Script src="https://my-example-script" strategy="post-hydrate" /> by default  */}
      {/* <Script src="https://my-example-script" strategy="idle" /> i.e. when other dom interactions are loaded */}
      {/* <Script src="https://my-example-script" strategy="off-main-thread" /> i.e. google analytics whitout component */}
    </Layout>
  )
}

export const Head = () => (
  <SiteSEO />
)

export default IndexPage
