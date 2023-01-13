import * as React from 'react'
import { SiteSEO } from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <OutboundLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/">
      Visit the Google Global Site Tag plugin page! (Out bound link)
    </OutboundLink>
    </main>
  )
}

export default AboutPage

export const Head = () => (
  <SiteSEO title="Page Two - About" />
)
