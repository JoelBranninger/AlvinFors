import { graphql } from 'gatsby'
import * as React from 'react'
import { Link } from 'gatsby'
const IndexPage = ({ data }) => {
   console.log(data)
   return (
      <div>
         Hello
         {data.allContentfulImage.nodes.map((blog) => (
            <div>
               <Link to={blog.slug}>
                  <h1>{blog.slug}</h1>
                  <img src={blog.imageFile.file.url} alt="bild" />
               </Link>
            </div>
         ))}
      </div>
   )
}
export const pageQuery = graphql`
   query {
      allContentfulImage {
         nodes {
            slug
            descriptionOfImage {
               raw
            }
            albumCategory
            imageFile {
               file {
                  url
               }
            }
         }
      }
   }
`
export default IndexPage
export const Head = () => <title>Home Page</title>
