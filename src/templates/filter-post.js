import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import '../styles/global.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const FilterPage = ({ data }) => {
   console.log(data)
   let category = data.allContentfulImage.nodes[0].albumCategory
   let capitalizedCategory =
      category.charAt(0).toUpperCase() + category.slice(1)
   let icon =
      data.allContentfulAlbumCategories.nodes[0].iconToTheCategory.file.url
   return (
      <Layout>
         <div className="mx-auto flex max-w-screen-2xl flex-wrap content-center overflow-hidden  md:h-[90vh]">
            <section className="grid gap-4 md:grid-cols-2" data-aos="fade-left">
               <div className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite">
                  <h2 className=" text-8xl">{capitalizedCategory}</h2>
                  <p className="text-xl">
                     {documentToReactComponents(
                        JSON.parse(
                           data.allContentfulAlbumCategories.nodes[0]
                              .descriptionOfCategory.raw
                        )
                     )}
                  </p>
               </div>
               <div
                  className="hidden  h-[25vh] justify-center bg-themeDark pr-4 text-themeWhite md:flex"
                  data-aos="fade-left "
               >
                  <img className="" src={icon} alt="camera" />
               </div>
            </section>
         </div>

         <div className="container  mx-auto">
            <ul id="cards" className="grid list-none grid-cols-1 gap-4 ">
               {data.allContentfulImage.nodes.map((blog, index) => {
                  const rotationDegree =
                     (index % 2 === 0 ? 1 : -1) *
                     (Math.floor(Math.random() * 5) + 1) // Växlar mellan positivt och negativt värde beroende på indexet
                  return (
                     <li
                        key={index}
                        className="card sticky top-0 mx-auto"
                        style={{ top: `10vh` }}
                     >
                        <div
                           className="card-body relative mx-auto box-content flex h-[90vh] items-center justify-center  rounded-3xl transition-all duration-500 ease-in-out"
                           style={{
                              // top: `10vh`,
                              transform: `rotate(${rotationDegree}deg)`,
                           }}
                        >
                           <Link
                              to={'/archive/' + blog.slug}
                              alt={blog.slug}
                              className="absolute"
                              style={{ top: '15vh' }}
                           >
                              <img
                                 className="border-4 border-themeOrange shadow-lg"
                                 style={{ maxHeight: '70vh', maxWidth: '90%' }}
                                 src={blog.imageFile.file.url}
                                 alt=""
                              />
                           </Link>
                        </div>
                     </li>
                  )
               })}
            </ul>
         </div>
      </Layout>
   )
}
export default FilterPage
export const pageQuery = graphql`
   query ($albumCategory: String!) {
      allContentfulImage(filter: { albumCategory: { eq: $albumCategory } }) {
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

      allContentfulAlbumCategories(filter: { slug: { eq: $albumCategory } }) {
         nodes {
            iconToTheCategory {
               file {
                  url
               }
            }
            descriptionOfCategory {
               raw
            }
         }
      }
   }
`
export const Head = () => <title>Home Page</title>

// Fråga stockholmaren om vrf inte tailwind funkar

// import { graphql } from 'gatsby'
// import * as React from 'react'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { Link } from 'gatsby'
// import weddingIcon from '../images/brölopp.svg'
// import Layout from '../components/layout'
// const FilterPage = ({ data }) => {
//    console.log(data)
//    let category = data.allContentfulAlbumCategories.nodes[0].categoryName
//    let capitalizedCategory =
//       category.charAt(0).toUpperCase() + category.slice(1)

//    return (
//       <Layout>
//          <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center overflow-hidden">
//             <section className="grid grid-cols-2 gap-4">
//                <div
//                   className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
//                   data-aos="fade-left"
//                >
//                   <h2 className=" text-8xl">{capitalizedCategory}</h2>
//                   <p className="text-xl">
//                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                      sed do eiusmod tempor incididunt ut labore et dolore magna
//                      aliqua.
//                   </p>
//                </div>
//                <div
//                   className="flex h-[25vh] justify-center bg-themeDark pr-4 text-themeWhite"
//                   data-aos="fade-left"
//                >
//                   <img src={weddingIcon} alt="camera" />
//                </div>
//             </section>
//          </div>
//          <div className="mx-auto flex  max-w-screen-2xl flex-wrap content-center overflow-hidden">
//             <div className="grid grid-cols-2 grid-rows-2 gap-4">
//                {data.allContentfulAlbumCategories.nodes.map((blog, index) => (
//                   <div
//                      key={index}
//                      className={`${
//                         index === 1
//                            ? 'col-span-1 row-span-2 bg-gray-300'
//                            : ' bg-gray-500'
//                      }`}
//                   >
//                      {documentToReactComponents(
//                         JSON.parse(blog.descriptionOfCategory.raw)
//                      )}
//                      {index}
//                   </div>
//                ))}
//             </div>
//          </div>
//       </Layout>
//    )
// }
// export default FilterPage
// export const pageQuery = graphql`
//    query ($albumCategory: String!) {
//       allContentfulAlbumCategories(
//          filter: { categoryName: { eq: $albumCategory } }
//       ) {
//          nodes {
//             categoryName
//             imagesToTheAlbum {
//                file {
//                   url
//                }
//             }
//             descriptionOfCategory {
//                raw
//             }
//          }
//       }
//    }
// `
// export const Head = () => <title>Home Page</title>
