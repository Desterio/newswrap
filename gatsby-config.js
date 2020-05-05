require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  pathPrefix: "/newswrap",
  siteMetadata: {
    title: `NewsWrap`,
    description: `A news aggregation site`,
    author: `@desterio`,
    contact: {
      phone: "+254 705 839255",
      email: "desteriodennis@gmail.com",
    },
    menuLinks: [
      {
        name: "blog",
        path: "/blog",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-stylus`,
    `gatsby-plugin-remove-serviceworker`,
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
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/newswrap-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-playground`
  ],
}
