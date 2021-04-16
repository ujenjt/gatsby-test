const path = require('path');
const LANDING_NAME = path.basename(__dirname);


const SITE_URL = `https://kotlinlang.org/lp/${LANDING_NAME}`;

module.exports = {
  pathPrefix: `/lp/${LANDING_NAME}`,
  siteMetadata: {
    title: `Kotlin Programming Language`,
    description: ``,
    author: `@kotlin`,
    siteUrl: SITE_URL,
    absoluteImagePathPrefix: 'https://kotlinlang.org'
  },
  plugins: [
    '@webteam/gatsby-plugin-pcss',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: path.resolve(__dirname, 'src'),
        },
        extensions: [],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ktor: Build Asynchronous Servers and Clients in Kotlin',
        short_name: 'Ktor',
        start_url: SITE_URL,
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/icons/icon-512x512.png', // This path is relative to the root of the site. Using biggest image for auto-mode
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5P98',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [`/404`, `/404.html`],
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
  ]
};
