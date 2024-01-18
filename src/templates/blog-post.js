import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
const Blog = ({ data }) => {
   console.log(data)
   return (
      <div
         style={{ background: `#282828`, width: `100vw`, height: `100vh` }}
         className="flex flex-col items-center justify-center"
      >
         <img
            src={data.image.imageFile.file.url}
            alt="bild"
            style={{
               maxWidth: `90vw`,
               maxHeight: `90vh`,
               objectFit: `cover`,
            }}
         />
         <p
            style={{
               maxWidth: `90vw`,
               maxHeight: `90vh`,
               objectFit: `cover`,
            }}
            className="text-xl text-themeWhite"
         >
            {documentToReactComponents(
               JSON.parse(data.image.descriptionOfImage.raw)
            )}
         </p>
      </div>
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
