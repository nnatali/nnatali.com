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
  plugins: [`gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, `gatsby-plugin-mdx`, `gatsby-plugin-minify`,
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
    resolve: `gatsby-plugin-tidy`,
    options: {
        cleanPublic: false,
        cleanCache: false,
        removeHashes: false,
        removeArtifacts: false,
        noJsMap: true,
        removeInlineStyles: true,
        jsDir: `scripts`,
        cssDir: `styles`
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
        `gatsby-remark-lazy-load`,
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
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Nelly Natali - Front-end developer`,
      short_name: `NNatali`,
      description: `Hey there! My name is Natalí and I am a front-end developer. Let's build something together.`,
      icon: `src/images/app.png`,
      icon_options: {
        purpose: `any maskable`,
      },
      start_url: `/`,
      background_color: `#0282CC`,
      theme_color: `#0282CC`,
      display: `minimal-ui`,
      orientation: `natural`
    },
  },
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      workboxConfig: {
        runtimeCaching: [
          {
            urlPattern: /(\.js$|\.css$|\.webp$|\.mp4$\/)/,
            handler: `CacheFirst`,
          }
        ]
      }
    },
  }
  ]
};