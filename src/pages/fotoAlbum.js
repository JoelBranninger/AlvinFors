import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as React from 'react'
import Layout from '../components/layout'
import camera from '../images/camera.svg'
import { Link } from 'gatsby'

const AlbumPage = ({ data }) => {
   return (
      <Layout pageTitle="Album">
         <div className=" mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center overflow-hidden">
            <section className="grid grid-cols-2 gap-4">
               <div
                  className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <h2 className=" text-8xl">Foto album</h2>
                  <p className="text-xl">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua.
                  </p>
               </div>
               <div
                  className="flex h-[25vh] justify-center bg-themeDark pr-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <img src={camera} alt="camera" />
               </div>
            </section>
         </div>
         <div className="mx-auto flex  max-w-screen-2xl flex-wrap content-center overflow-hidden">
            <section
               className="grid w-full grid-cols-3 gap-8 p-4 pl-8 text-themeWhite"
               data-aos="fade-up"
            >
               {data.allContentfulAlbumCategories.nodes.map((data) => (
                  <Link
                     key={data.categoryName}
                     to={`/${data.categoryName.toLowerCase()}`}
                  >
                     <div className="relative">
                        <div className="absolute inset-0 left-[-1rem] top-4 z-10 h-full w-full">
                           <div className="h-full w-full border-4 border-themeOrange" />
                        </div>
                        <div className="absolute inset-0 z-30 bg-black p-2 opacity-60"></div>
                        <div className="absolute inset-0 z-30 p-2 ">
                           <div className="absolute bottom-2">
                              <h4 className="text-4xl">{data.categoryName}</h4>
                              <div className=" text-base text-themeWhite">
                                 {documentToReactComponents(
                                    JSON.parse(data.descriptionOfCategory.raw)
                                 )}
                              </div>
                           </div>
                        </div>
                        <img
                           className="relative z-20 aspect-[4/5] h-full w-full object-cover object-center"
                           src={data.pictureToTheCategory.file.url}
                           alt="Beskrivande alt-text här"
                        />
                     </div>
                  </Link>
               ))}
            </section>
         </div>
      </Layout>
   )
}
export const pageQuery = graphql`
   query {
      allContentfulAlbumCategories {
         nodes {
            categoryName
            descriptionOfCategory {
               raw
            }
            pictureToTheCategory {
               file {
                  url
               }
            }
         }
      }
   }
`
export default AlbumPage
export const Head = () => <title>Contact</title>
