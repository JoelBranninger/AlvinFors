/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
   siteMetadata: {
      title: `Portfolio`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      {
         resolve: 'gatsby-source-contentful',
         options: {
            accessToken: process.env.CONTENTFUL_ACCESSS_TOKEN,
            spaceId: process.env.CONTENTFUL_SPACE_ID,
         },
      },
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      'gatsby-plugin-netlify',
   ],
}
