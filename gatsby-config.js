/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nelly Natalí | Front-end developer | Boston, MA`,
    siteUrl: `https://www.nnatali.com`,
    description: `Hey there! My name is Natalí and I am a front-end developer. Let's build something together.`,
    twitterUsername: `@nnatali`,
    image: `${__dirname}/images/site-image.png`,
  },
  plugins: [`gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, `gatsby-plugin-mdx`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      additionalData: `@import ${__dirname}/src/styles/global`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `portfolio`,
      path: `${__dirname}/content/portfolio`,
    },
  },
  {
    resolve: `gatsby-plugin-prettier-build`,
    options: {
      types: ['html'],
      concurrency: 20,
      verbose: true
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1140,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: `language-`,
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
            escapeEntities: {},
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-svgr-loader`,
    options: {
        rule: {
          include: /\.inline\.svg$/
        }
    }
  },
]
};