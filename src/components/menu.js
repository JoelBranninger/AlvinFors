import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const MyComponent = () => {
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

   // Access the data returned by the query
   const menuLinks = data.allContentfulMenuLink.nodes

   // Now you can use menuLinks in your component

   return (
      <ul className="flex flex-row p-0 font-medium">
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
   )
}

export default MyComponent
