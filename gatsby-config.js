const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Josh Steele`,
    description: `Josh Steele's portfolio site. Built with Gatsby and React`,
    author: `Josh Steele`,
  },
  plugins: [    {
    resolve: `gatsby-source-wordpress`,
    options: {
      /*
       * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
       * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
       */
      baseUrl: `jjsteele.home.blog`,
      // The protocol. This can be http or https.
      protocol: `http`,
      // Indicates whether the site is hosted on wordpress.com.
      // If false, then the assumption is made that the site is self hosted.
      // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
      // If your site is hosted on wordpress.org, then set this to false.
      hostingWPCOM: true,
      // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
      // This feature is untested for sites hosted on WordPress.com
      useACF: false,
    },
  },
      `gatsby-plugin-postcss`,

    `gatsby-plugin-react-helmet`,
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
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        path: `./src/images`
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro', 'Lato']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-josh-steele`,
        short_name: `jjsteele`,
        description: `A collection of my projects and ideas`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ECEDED`,
        theme_color: `#1C1718`,
        display: `standalone`,
        icon: `src/images/JSFramed.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/projects/`, `/blog/`, `/contact/`],
        appendScript: require.resolve(`./src/custom-sw-code.js`),
      },
    },
  ],
}
