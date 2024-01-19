import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const Footer = () => {
   const data = useStaticQuery(graphql`
      query {
         allContentfulMenuLink {
            nodes {
               linkName
               linkAdress
            }
         }
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
   const menuLinks = data.allContentfulMenuLink.nodes
   return (
      <>
         <footer className="border-gray-200 bg-themeDark">
            <div className="mx-auto max-w-screen-2xl p-4">
               <div className="flex h-36 items-center justify-between">
                  <div className="flex items-center gap-4 text-themeWhite">
                     <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                     >
                        <img
                           src={
                              data.allContentfulSiteLogo.nodes[0].logo.file.url
                           }
                           alt="alvin fors logo"
                        />
                     </Link>
                     <span>© 2023 AlvinFors</span>
                  </div>
                  <div>
                     <ul className="flex space-x-4 text-themeWhite">
                        {menuLinks.map((link) => (
                           <li key={link.linkAdress}>
                              <Link
                                 to={link.linkAdress}
                                 className="hover:text-themeOrange"
                              >
                                 {link.linkName}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default Footer
