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
        noJsMap: false,
        removeInlineStyles: false,
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
      icons: [
        {
          src: `favicons/icon-48x48.png`,
          sizes: `48x48`,
          type: `image/png`,
        },
        {
          src: `favicons/icon-72x72.png`,
          sizes: `72x72`,
          type: `image/png`,
        },
        {
          src: `favicons/icon-96x96.png`,
          sizes: `96x96`,
          type: `image/png`,
        },
        {
          src: `favicons/icon-144x144.png`,
          sizes: `144x144`,
          type: `image/png`,
        },
        {
          src: `favicons/icon-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `favicons/icon-256x256.png`,
          sizes: `256x256`,
          type: `image/png`,
        },
        {
          src: `favicons/icon-384x384.png`,
          sizes: `384x384`,
          type: `image/png`,
        },
        {
          src: `favicons/icon-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
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