import * as React from 'react'
import { Link } from 'gatsby'
import { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import Menu from '../components/menu'
import AOS from 'aos'
const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
      query {
         allContentfulSiteLogo {
            nodes {
               logo {
                  file {
                     url
                  }
               }
            }
         }
      }
   `)
   console.log(data)
   useEffect(() => {
      AOS.init()
   }, [])
   return (
      <div className="bg-themeDark">
         <nav className="fixed top-0 z-10 w-full border-b-2 border-themeOrange bg-themeDark">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4 py-8">
               <Link
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
               >
                  <img
                     src={data.allContentfulSiteLogo.nodes[0].logo.file.url}
                     alt="alvin fors logo"
                  />
               </Link>

               <Menu />
            </div>
         </nav>
         <main className="p-4">
            <div className="mt-[10vh]">{children}</div>
         </main>
         <Footer />
      </div>
   )
}

export default Layout
