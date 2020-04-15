import React, { useState } from 'react'
import { WiMoonrise } from 'react-icons/wi'


const Theme: React.FC = () => {

    let localTheme: any = localStorage.getItem("theme")
    const [theme, setTheme] = useState(localTheme)

    const el = document.documentElement

    if (localTheme) {
        el.setAttribute('data-theme', theme)
    }

    const handleTheme = () => {
        localStorage.setItem("theme", localTheme === 'light' ? 'dark' : 'light')
        let newTheme = localStorage.getItem('theme')
        setTheme(newTheme)
    }

    return (
        <li className="h-full w-auto flex justify-center items-center">
            <WiMoonrise className="text-2xl text-catagoryHd" onClick={handleTheme} />
        </li>
    )
}

export default Theme