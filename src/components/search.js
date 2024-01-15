import React, { useState } from 'react'

const Search = ({ onSubmit }) => {
   const [query, setQuery] = useState('')

   const handleInputChange = (event) => {
      setQuery(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      onSubmit(query)
   }

   return (
      <form className="w-fit" onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            className="border-2 border-themeOrange bg-transparent p-2 text-xl text-themeWhite transition-all placeholder:text-themeWhite focus:shadow-2xl focus-visible:outline-none"
         />
         <button
            type="submit"
            className=" ml-4 border-2 border-themeOrange p-2 text-xl text-themeWhite"
         >
            Search
         </button>
      </form>
   )
}

export default Search
