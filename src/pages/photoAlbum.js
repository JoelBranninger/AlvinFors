import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
const AlbumPage = ({ data }) => {
   //  console.log(data.allContentfulAlbumCategories.nodes)
   const [mouseX, setMouseX] = React.useState(0)
   const [mouseY, setMouseY] = React.useState(0)
   const [hoveredCategory, setHoveredCategory] = React.useState(null)

   const handleMouseEnter = (categoryName) => {
      setHoveredCategory(categoryName)
      console.log(hoveredCategory)
   }

   const handleMouseLeave = () => {
      setHoveredCategory(null)
      console.log(hoveredCategory)
   }
   const handleMouseMove = (event) => {
      // Update the mouseX state with the current X-coordinate of the mouse
      setMouseX(event.pageX)
      setMouseY(event.pageY)
   }

   const title = data?.allContentfulPhotoAlbumPage?.nodes[0]?.title || ''
   const description =
      data?.allContentfulPhotoAlbumPage?.nodes[0]?.description?.raw || ''
   const image =
      data?.allContentfulPhotoAlbumPage?.nodes[0]?.image?.file?.url || ''
   return (
      <Layout pageTitle="Album">
         <div className=" mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center space-y-64 overflow-hidden">
            <ul
               className="flex w-full flex-col items-center justify-between "
               onMouseMove={handleMouseMove}
            >
               {data.allContentfulAlbumCategories.nodes.map((data) => (
                  <li
                     className="p-4 text-6xl font-bold uppercase text-transparent opacity-50 transition-all hover:text-themeWhite hover:opacity-100"
                     onMouseEnter={() => handleMouseEnter(data.categoryName)}
                     onMouseLeave={handleMouseLeave}
                     style={{
                        zIndex: `${
                           hoveredCategory === data.categoryName ? '1' : '2'
                        }`,
                     }}
                  >
                     <img
                        src={data.pictureToTheCategory.file.url}
                        alt=""
                        className={`pointer-events-none absolute left-0 top-0  translate-x-1/2 translate-y-1/2  `}
                        style={{
                           zIndex: '1',
                           translate: '-50% -50%',
                           transition: 'width 0.5s',
                           transform: `translate(${mouseX}px, ${mouseY}px)`,
                           width: `${
                              hoveredCategory === data.categoryName
                                 ? '700px'
                                 : '0px'
                           }`,
                        }}
                     />
                     <Link
                        key={data.categoryName}
                        to={`/${data.categoryName.toLowerCase()}`}
                        className="text-stroke relative z-20"
                        style={{
                           zIndex: '10',
                        }}
                     >
                        {data.categoryName}
                     </Link>
                  </li>
               ))}
            </ul>
            {/* <section className="grid grid-cols-2 gap-4">
               <div
                  className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <h2 className="text-8xl">{title}</h2>
                  <p className="text-xl">
                     {documentToReactComponents(JSON.parse(description))}
                  </p>
               </div>
               <div
                  className="flex h-[25vh] justify-center bg-themeDark pr-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <img src={image} alt="camera" />
               </div>
            </section> */}
         </div>
         <div className="mx-auto flex max-w-screen-2xl flex-wrap content-center items-center overflow-hidden">
            {/* <section
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
            </section> */}
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
      allContentfulPhotoAlbumPage {
         nodes {
            description {
               raw
            }
            title
            image {
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
