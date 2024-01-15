import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useEffect } from 'react'
import logo from '../images/Logo.svg'
import AOS from 'aos'
const Layout = ({ pageTitle, children }) => {
   useEffect(() => {
      AOS.init()
   }, []) // Runs once on component mount
   return (
      <div className="bg-themeDark">
         <nav className=" fixed top-0 z-10 w-full border-gray-200">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4 py-8">
               <Link
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
               >
                  <img src={logo} alt="alvin fors logo" />
               </Link>
               <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
               >
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="h-5 w-5"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 17 14"
                  >
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                     />
                  </svg>
               </button>
               <div
                  className=" hidden w-full items-center  md:flex md:w-auto"
                  id="navbar-default"
               >
                  <ul className="flex flex-row p-0 font-medium">
                     <li>
                        <Link
                           to="/"
                           className="mx-3 my-2 block text-themeWhite"
                           activeClassName="!text-themeOrange border-b border-themeOrange"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/about"
                           className="mx-3 my-2 block text-themeWhite"
                           activeClassName="!text-themeOrange border-b border-themeOrange"
                        >
                           About
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/contact"
                           className="mx-3 my-2 block text-themeWhite"
                           activeClassName="!text-themeOrange border-b border-themeOrange"
                        >
                           Contact
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/fotoAlbum"
                           className="mx-3 my-2 block text-themeWhite"
                           activeClassName="!text-themeOrange border-b border-themeOrange"
                        >
                           Foto album
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <main>{children}</main>
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
