import React from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'

const Search: React.FC = () => {
    return (
        <section className="border-b border-border border-l flex justify-around items-center p-2 bg-secondary rounded h-10">
            <input type="text" placeholder="Search News" className="focus:outline-none bg-secondary text-xs text-font placeholder-font" />
            <AiOutlineFileSearch className="text-font" />
        </section>
    )
}

export default Search
