import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import * as React from 'react'
import Layout from '../components/layout'
const ContactPage = ({ data }) => {
   const title = data?.allContentfulContactPage?.nodes[0]?.title || ''
   const description =
      data?.allContentfulContactPage?.nodes[0]?.description?.raw || ''
   const firstColumnTitle =
      data?.allContentfulContactPage?.nodes[0]?.firstColumnTitle || ''
   const firstColumnImage =
      data?.allContentfulContactPage?.nodes[0]?.firstColumnImage?.file?.url ||
      ''
   const phoneNumber =
      data?.allContentfulContactPage?.nodes[0]?.phoneNumber || ''
   const secondColumnTitle =
      data?.allContentfulContactPage?.nodes[0]?.secondColumnTitle || ''
   const secondColumnImage =
      data?.allContentfulContactPage?.nodes[0]?.secondColumnImage?.file?.url ||
      ''
   const emailAdress =
      data?.allContentfulContactPage?.nodes[0]?.emailAdress || ''
   return (
      <Layout pageTitle="Contact">
         <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center overflow-hidden">
            <section className="grid grid-cols-2 gap-4">
               <div
                  className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <h2 className=" text-6xl">{title}</h2>
                  <p className="text-xl">
                     {documentToReactComponents(JSON.parse(description))}
                  </p>
               </div>
               <div
                  className="flex justify-center bg-themeDark pr-4 text-themeWhite"
                  data-aos="fade-left"
               ></div>
            </section>
            <div
               className="mx-auto mt-[10vh] flex w-full max-w-screen-2xl flex-wrap content-center"
               data-aos="fade-up"
            >
               <section className="grid w-full grid-cols-2  gap-4 p-4 text-themeWhite">
                  <div className="mx-auto flex w-96  flex-col items-center gap-8 border-2 border-themeOrange bg-themeDarker p-6">
                     <img src={firstColumnImage} alt="" />
                     <h3 className="border-b-2 border-themeOrange text-3xl">
                        {firstColumnTitle}
                     </h3>

                     <p className="text-xl">{phoneNumber}</p>
                  </div>
                  <div className="mx-auto flex w-96  flex-col items-center gap-8 border-2 border-themeOrange bg-themeDarker p-6">
                     <img src={secondColumnImage} alt="" />
                     <h3 className="border-b-2 border-themeOrange text-3xl">
                        {secondColumnTitle}
                     </h3>

                     <p className="text-xl">{emailAdress}</p>
                  </div>
               </section>
            </div>
         </div>
      </Layout>
   )
}
export const pageQuery = graphql`
   query {
      allContentfulContactPage {
         nodes {
            description {
               raw
            }
            title
            firstColumnTitle
            firstColumnImage {
               file {
                  url
               }
            }
            phoneNumber
            firstColumnTitle
            secondColumnImage {
               file {
                  url
               }
            }
            emailAdress
         }
      }
   }
`
export default ContactPage
export const Head = () => <title>Contact</title>
