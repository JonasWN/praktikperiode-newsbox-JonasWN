import React from 'react'
import Nav from './Nav'

const Header: React.FC = () => {
    return (
        <header className="container font-main px-4 m-auto py-4 bg-primary box-border border-b border-border" id="Top">
            <Nav />
        </header>
    )
}

export default Header
