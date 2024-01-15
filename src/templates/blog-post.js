import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
const Blog = ({ data }) => {
   console.log(data)
   return (
      <Layout>
         <h1>{data.image.title}</h1>
         <p>
            {data.image.descriptionOfImage
               ? documentToReactComponents(
                    JSON.parse(data.image.descriptionOfImage.raw)
                 )
               : null}
         </p>
         <img src={data.image.imageFile.file.url} alt="bild" width="400" />
      </Layout>
   )
}
export default Blog
export const pageQuery = graphql`
   query ($slug: String!) {
      image: contentfulImage(slug: { eq: $slug }) {
         slug
         imageFile {
            file {
               url
            }
         }
         albumCategory
         descriptionOfImage {
            raw
         }
      }
   }
`
