import React, { useState, useRef } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import Lottie from 'lottie-react-web'
import * as animationData from './Catagory/search2.json'

const Search = () => {
    const [toggle, setToggle] = useState(false)
    const inputRef = useRef()

    const defaultOptions = {
        loop: false,
        autoplay: toggle,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };

    const onFocus = () => {
        setToggle(!toggle)
        if (!toggle)
            inputRef.current.focus()
    }

    return (
        <section className="border-b border-border border-l flex justify-around items-center p-2 bg-secondary rounded h-10">
            <input onBlur={onFocus} onFocus={onFocus} ref={inputRef} type="text" placeholder="Search News" className="focus:outline-none bg-secondary text-sm text-input placeholder-input font-semibold" />
            {/* <AiOutlineFileSearch className="text-font" /> */}
            <div onClick={() => onFocus()}>
                <Lottie options={defaultOptions}
                    height={35}
                    width={35}
                    speed={toggle ? 0.7 : 2.6}
                    direction={toggle ? 1 : -1}
                />
            </div>
        </section>
    )
}

export default Search
