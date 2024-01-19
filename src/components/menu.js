import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const Menu = () => {
   // Define your GraphQL query
   const data = useStaticQuery(graphql`
      query {
         allContentfulMenuLink {
            nodes {
               linkName
               linkAdress
            }
         }
      }
   `)
   console.log(data)
   const menuLinks = data.allContentfulMenuLink.nodes
   const [navOverlayOpen, setNavOverlayOpen] = React.useState(false)
   const openNav = () => {
      navOverlayOpen === true
         ? setNavOverlayOpen(false)
         : setNavOverlayOpen(true)
      console.log(navOverlayOpen)
   }
   return (
      <>
         <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={openNav}
         >
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
            className={`${
               navOverlayOpen ? 'top-0' : 'top-[-100vh]'
            } absolute  left-0 h-screen w-screen items-center bg-themeOrange transition-all duration-300 md:w-auto`}
            id="navbar-default"
         >
            <button
               type="button"
               className="absolute right-4 top-8 h-10  w-10 p-2 text-gray-500 md:hidden"
               onClick={openNav}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 123 123"
                  fill="none"
               >
                  <path
                     d="M1.42575 8.31299C-0.47525 6.41199 -0.47525 3.32899 1.42575 1.42699C3.32675 -0.475012 6.40975 -0.475012 8.31175 1.42699L61.4387 54.554L114.566 1.42699C116.467 -0.475012 119.55 -0.475012 121.453 1.42699C123.354 3.32799 123.354 6.41199 121.453 8.31299L68.3237 61.439L121.452 114.567C123.353 116.468 123.353 119.551 121.452 121.453C119.55 123.355 116.467 123.355 114.565 121.453L61.4377 68.326L8.31175 121.453C6.41075 123.355 3.32775 123.355 1.42575 121.453C-0.47525 119.552 -0.47525 116.469 1.42575 114.567L54.5527 61.439L1.42575 8.31299Z"
                     fill="black"
                  />
               </svg>
            </button>
            <ul
               className="absolute top-1/2  w-screen flex-row bg-themeOrange p-0 text-center font-medium"
               style={{ translate: '0% -50%' }}
            >
               {menuLinks.map((link) => (
                  <li key={link.linkAdress}>
                     <Link
                        to={link.linkAdress}
                        className="mx-3 my-8 block text-6xl text-themeDark"
                     >
                        {link.linkName}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <div
            className="hidden w-full items-center md:flex md:w-auto"
            id="navbar-default"
         >
            <ul className="  flex flex-row p-0 font-medium">
               {menuLinks.map((link) => (
                  <li key={link.linkAdress}>
                     <Link
                        to={link.linkAdress}
                        className="mx-3 my-2 block text-themeWhite"
                        activeClassName="!text-themeOrange border-b border-themeOrange"
                     >
                        {link.linkName}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </>
   )
}

export default Menu
