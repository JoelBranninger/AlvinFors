import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as React from 'react'
import Layout from '../components/layout'
import alvin1 from '../images/alvinAbout1.png'
import alvin2 from '../images/alvinAbout2.png'
const AboutPage = ({ data }) => {
   return (
      <Layout pageTitle="About Me">
         <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center  overflow-hidden">
            <section className="grid grid-cols-2 gap-4">
               <div
                  className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <h2 className=" border-b-4 border-themeOrange text-6xl">
                     About
                  </h2>
                  <p className="text-2xl">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua.
                  </p>
               </div>
               <div
                  className="flex justify-center bg-themeDark pr-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <div className="relative">
                     <div className="absolute inset-0 left-[-1rem] top-4 z-10 h-full w-full">
                        <div className="h-full w-full border-4 border-themeOrange" />
                     </div>
                     <img
                        className="relative z-20 h-full w-full object-cover object-center"
                        src={alvin1}
                        alt="Beskrivande alt-text här"
                     />
                  </div>
               </div>
            </section>
         </div>
         <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center overflow-hidden">
            <section className="grid grid-cols-2 gap-36">
               <div
                  className="flex justify-center bg-themeDark pl-4 text-themeWhite"
                  data-aos="fade-right"
               >
                  <div className="relative">
                     <div className="absolute inset-0 left-[1rem] top-4 z-10 h-full w-full">
                        <div className="h-full w-full border-4 border-themeOrange" />
                     </div>
                     <img
                        className="relative z-20 h-full w-full object-cover object-center"
                        src={alvin2}
                        alt="Beskrivande alt-text här"
                     />
                  </div>
               </div>
               <div
                  className=" flex flex-wrap content-center gap-6 pr-4 text-themeWhite"
                  data-aos="fade-right"
               >
                  <h2 className=" border-b-4 border-themeOrange text-6xl">
                     Setup
                  </h2>
                  <p className="text-2xl">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua.
                  </p>
                  <div className="flex flex-col gap-4">
                     <h3 className="text-4xl font-medium">Equipment:</h3>
                     <ul className="list-[square] pl-7 text-2xl marker:text-themeOrange">
                        <li>Soundooks 2 st</li>
                        <li>Skit feta och dyra lampor</li>
                        <li>Ännu flera dyra lampor</li>
                        <li>Ett dj bord (x2 6700 pro)</li>
                     </ul>
                  </div>
               </div>
            </section>
         </div>
         <div
            className="mx-auto flex h-1/2 max-w-screen-2xl flex-wrap content-center"
            data-aos="fade-up"
         >
            <div className="flex w-[600px] flex-col gap-4 p-4 text-themeWhite">
               <h2 className="text-6xl font-bold">Photo album</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Morbi blandit cursus risus at ultrices.
               </p>
            </div>
            <section className="grid w-full grid-cols-3 gap-8 p-4 pl-8 text-themeWhite">
               {data.allContentfulAlbumCategories.nodes.map((data) => (
                  <div className="relative">
                     <div className="absolute inset-0 left-[-1rem] top-4 z-10 h-full w-full">
                        <div className="h-full w-full border-4 border-themeOrange" />
                     </div>
                     <div className="absolute inset-0 z-30 bg-black p-2 opacity-60"></div>
                     <div className="absolute inset-0 z-30 p-2 ">
                        <div className="absolute bottom-2">
                           <h4 className="text-4xl">{data.categoryName}</h4>
                           <p className=" text-base text-themeWhite">
                              {documentToReactComponents(
                                 JSON.parse(data.descriptionOfCategory.raw)
                              )}
                           </p>
                        </div>
                     </div>
                     <img
                        className="relative z-20 aspect-[4/5] h-full w-full object-cover object-center"
                        src={data.pictureToTheCategory.file.url}
                        alt="Beskrivande alt-text här"
                     />
                  </div>
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
export default AboutPage
export const Head = () => <title>About Me</title>
