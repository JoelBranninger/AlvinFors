// pages/404.js
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Search from '../components/search'
import { Link } from 'gatsby'
const NotFoundPage = ({ data }) => {
   const allPages = data.allSitePage.edges

   const [searchResults, setSearchResults] = useState([])

   const handleSearch = (query) => {
      if (query.length > 0) {
         const results = allPages.filter(
            (page) =>
               page.node.path.toLowerCase().includes(query.toLowerCase()) ||
               page.node.path.toLowerCase().includes(query.toLowerCase())
         )
         setSearchResults(results)
      }
   }

   return (
      <Layout pageTitle="Not Found">
         <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center  overflow-hidden">
            <section
               className="flex w-full flex-col content-center items-center gap-10"
               data-aos="fade-up"
            >
               <div className="flex justify-center bg-themeDark text-3xl text-themeWhite">
                  Something went wrong!
               </div>
               <div className=" flex w-fit flex-col content-center gap-5 text-themeWhite">
                  <Search onSubmit={handleSearch} />
                  {searchResults.map((result) => (
                     <div cla key={result.node.path}>
                        <Link to={result.node.path}>
                           <h3 className="text-center">
                              {result.node.path
                                 .split('/')
                                 .filter(Boolean)
                                 .slice(-1)[0]
                                 .charAt(0)
                                 .toUpperCase() +
                                 result.node.path
                                    .split('/')
                                    .filter(Boolean)
                                    .slice(-1)[0]
                                    .slice(1)}
                           </h3>
                        </Link>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </Layout>
   )
}

export const query = graphql`
   query {
      allSitePage {
         edges {
            node {
               pageContext
               path
            }
         }
      }
   }
`

export default NotFoundPage

export const Head = () => <title>Not found</title>
