/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
   siteMetadata: {
      title: `Portfolio`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      {
         resolve: 'gatsby-source-contentful',
         options: {
            accessToken: 'mMiEngGVUj8LqaylQS3tUsjeMy0jFUxEjTK_dWllmB0',
            spaceId: 'q8ftcuzlu439',
         },
      },
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-postcss',
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      'gatsby-plugin-netlify',
   ],
}
