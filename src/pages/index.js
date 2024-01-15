import { graphql } from 'gatsby'
import * as React from 'react'
import { useEffect } from 'react'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import AOS from 'aos'
import 'aos/dist/aos.css' // Importera CSS-filen för AOS-stilar
const IndexPage = ({ data }) => {
   console.log(data)
   const heading = data?.allContentfulStartPage?.nodes[0]?.Heading || ''
   const textToFirstHeading =
      data?.allContentfulStartPage?.nodes[0]?.textToFirstHeading?.raw || ''
   const imageToFirstHeadning =
      data?.allContentfulStartPage?.nodes[0]?.imageToFirstHeadning?.file?.url ||
      ''
   const secondSectionDescription =
      data?.allContentfulStartPage?.nodes[0]?.secondSectionDescription || ''
   const secondSectionButtonText =
      data?.allContentfulStartPage?.nodes[0]?.secondSectionButtonText || ''
   const secondSectionTitle =
      data?.allContentfulStartPage?.nodes[0]?.secondSectionTitle || ''
   useEffect(() => {
      AOS.init({
         duration: 1000, // Här kan du sätta dina önskade AOS-initieringsalternativ
      })
   }, [])
   return (
      <Layout pageTitle="Home">
         <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center overflow-hidden">
            <section className="grid grid-cols-2 gap-4">
               <div
                  className="flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <h2 className=" text-8xl">{heading}</h2>
                  <p className="text-xl">
                     {documentToReactComponents(JSON.parse(textToFirstHeading))}
                  </p>
                  <button className="w-fit border-2 border-themeOrange px-3 py-2 text-xl font-bold text-themeOrange">
                     Contact me
                  </button>
               </div>
               <div
                  className="flex justify-center bg-themeDark pr-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <img src={imageToFirstHeadning} alt="animated alvin" />
               </div>
            </section>
         </div>
         <div
            className="mx-auto flex h-1/2 max-w-screen-2xl flex-wrap content-center"
            data-aos="fade-up"
         >
            <div className="w-[600px] p-4 text-themeWhite">
               <h2 className="mb-2 w-fit border-b-4 border-themeOrange pb-1 text-4xl font-bold">
                  {secondSectionTitle}
               </h2>
               <p>{secondSectionDescription}</p>
            </div>
            <section className="grid w-full grid-cols-3 gap-4 p-4 text-themeWhite">
               {data.allContentfulAlbumCategories.nodes.map((data) => (
                  <div
                     key={data.categoryName}
                     className="flex w-full flex-col flex-wrap gap-4 bg-themeLightDark p-6"
                  >
                     <img
                        alt="En bild"
                        src={data.iconToTheCategory.file.url}
                        className="w-fit"
                     />
                     <h3 className="w-fit border-b-4 border-themeOrange text-2xl font-bold">
                        {data.categoryName}
                     </h3>
                     <p>
                        {documentToReactComponents(
                           JSON.parse(data.descriptionOfCategory.raw)
                        )}
                     </p>
                  </div>
               ))}
            </section>
            <div className="flex w-full justify-center">
               <button className="border-2 border-themeOrange px-8 py-4 text-xl text-themeOrange transition-all hover:bg-themeOrange hover:text-themeWhite">
                  {secondSectionButtonText}
               </button>
            </div>
         </div>
      </Layout>
   )
}
export const pageQuery = graphql`
   query {
      allContentfulStartPage {
         nodes {
            Heading
            textToFirstHeading {
               raw
            }
            imageToFirstHeadning {
               file {
                  url
               }
            }
            secondSectionButtonText
            secondSectionDescription
            secondSectionTitle
         }
      }
      allContentfulAlbumCategories {
         nodes {
            categoryName
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

export default IndexPage
export const Head = () => <title>Home Page</title>
