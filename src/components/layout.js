import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useEffect } from 'react'
import logo from '../images/Logo.svg'
import Menu from '../components/menu'

import AOS from 'aos'
const Layout = ({ data, pageTitle, children }) => {
   console.log(data)
   useEffect(() => {
      AOS.init()
   }, []) // Runs once on component mount
   return (
      <div className="bg-themeDark">
         <nav className="fixed top-0 z-10 w-full border-b-2 border-themeOrange bg-themeDark">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4 py-8">
               <Link
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
               >
                  <img src={logo} alt="alvin fors logo" />
               </Link>

               <Menu />
            </div>
         </nav>
         <main className="p-4">
            <div className="mt-[10vh]">{children}</div>
         </main>
         <footer className="border-gray-200 bg-themeDark">
            <div className="mx-auto max-w-screen-2xl p-4">
               <div className="flex h-36 items-center justify-between">
                  <div className="flex items-center gap-4 text-themeWhite">
                     <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                     >
                        <StaticImage alt="En bild" src="../images/logo.svg" />
                     </Link>
                     <span>© 2023 AlvinFors</span>
                  </div>
                  <div>
                     <ul className="flex space-x-4 text-themeWhite">
                        <li>
                           <Link to="/" className="hover:text-themeOrange">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link to="/about" className="hover:text-themeOrange">
                              About
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/contact"
                              className="hover:text-themeOrange"
                           >
                              Contact
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default Layout
