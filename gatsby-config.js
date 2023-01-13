/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `nnatali.com`,
    siteUrl: `https://www.nnatali.com`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};