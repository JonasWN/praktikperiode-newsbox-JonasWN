import React, { useState } from 'react'

const Toggle: React.FC = () => {
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
        <div className="my-12 w-48 mx-auto text-center text-catagoryHd" onClick={handleTheme}>
            <div className="focus:outline-none mx-auto border-border border font-semibold rounded-full py-2 px-4">Toggle Dark Mode</div>
        </div>
    )
}

export default Toggle
