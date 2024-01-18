import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AboutPage = ({ data }) => {
   const firstSectionTitle =
      data?.allContentfulAboutPage?.nodes[0]?.firstSectionTitle || ''
   const firstSectionDescription =
      data?.allContentfulAboutPage?.nodes[0]?.firstSectionDescription?.raw || ''
   const imageToFirstSecion =
      data?.allContentfulAboutPage?.nodes[0]?.imageToFirstSecion
         ?.gatsbyImageData || ''
   const secondSectionTitle =
      data?.allContentfulAboutPage?.nodes[0]?.secondSectionTitle || ''
   const secondSectionDescription =
      data?.allContentfulAboutPage?.nodes[0]?.secondSectionDescription?.raw ||
      ''
   const imageToSecondSection =
      data?.allContentfulAboutPage?.nodes[0]?.imageToSecondSection?.file?.url ||
      ''
   const thirdSectionTitle =
      data?.allContentfulAboutPage?.nodes[0]?.thirdSectionTitle || ''
   const thirdSectionDescription =
      data?.allContentfulAboutPage?.nodes[0]?.thirdSectionDescription?.raw || ''
   return (
      <Layout pageTitle="About Me">
         <div className="mx-auto  flex max-w-screen-2xl flex-wrap content-center  overflow-hidden pt-32 lg:h-[90vh]">
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
               <div
                  className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <h2 className=" border-b-4 border-themeOrange text-6xl">
                     {firstSectionTitle}
                  </h2>
                  <p className="text-2xl">
                     {documentToReactComponents(
                        JSON.parse(firstSectionDescription)
                     )}
                  </p>
               </div>
               <div
                  className="flex justify-center bg-themeDark p-8 pr-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <div className="relative">
                     <div className="absolute inset-0 left-[-1rem] top-4 z-10 h-full w-full">
                        <div className="h-full w-full border-4 border-themeOrange" />
                     </div>
                     {/* <img
                        className="relative z-20 h-full w-full object-cover object-center"
                        src={imageToFirstSecion}
                        alt="Beskrivande alt-text här"
                     /> */}

                     <GatsbyImage
                        className="relative z-20 h-full w-full object-cover object-center"
                        image={getImage(imageToFirstSecion)}
                        alt=""
                     />
                  </div>
               </div>
            </section>
         </div>
         <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center overflow-hidden">
            <section className="grid gap-8  lg:grid-cols-2">
               <div
                  className="order-last flex justify-center bg-themeDark p-8 pl-4 text-themeWhite lg:order-first"
                  data-aos="fade-right"
               >
                  <div className="relative">
                     <div className="absolute inset-0 left-[1rem] top-4 z-10 h-full w-full">
                        <div className="h-full w-full border-4 border-themeOrange" />
                     </div>
                     <img
                        className="relative z-20 h-full w-full object-cover object-center"
                        src={imageToSecondSection}
                        alt="Beskrivande alt-text här"
                     />
                  </div>
               </div>
               <div
                  className="flex flex-wrap content-center gap-6 p-8 pr-4 text-themeWhite"
                  data-aos="fade-right"
               >
                  <h2 className=" border-b-4 border-themeOrange text-6xl">
                     {secondSectionTitle}
                  </h2>
                  <p className="text-2xl">
                     {documentToReactComponents(
                        JSON.parse(secondSectionDescription)
                     )}
                  </p>
               </div>
            </section>
         </div>
         <div
            className="mx-auto flex h-1/2 max-w-screen-2xl flex-wrap content-center"
            data-aos="fade-up"
         >
            <div className="flex w-[600px] flex-col gap-4 p-4 text-themeWhite">
               <h2 className="text-6xl font-bold">{thirdSectionTitle}</h2>
               <p>
                  {documentToReactComponents(
                     JSON.parse(thirdSectionDescription)
                  )}
               </p>
            </div>
            <section className="grid w-full gap-8 p-4 pl-8 text-themeWhite lg:grid-cols-3">
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
      allContentfulAboutPage {
         nodes {
            firstSectionDescription {
               raw
            }
            firstSectionTitle
            imageToFirstSecion {
               gatsbyImageData
               file {
                  url
               }
            }
            imageToSecondSection {
               file {
                  url
               }
            }
            secondSectionTitle
            secondSectionDescription {
               raw
            }
            thirdSectionTitle
            thirdSectionDescription {
               raw
            }
         }
      }
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
