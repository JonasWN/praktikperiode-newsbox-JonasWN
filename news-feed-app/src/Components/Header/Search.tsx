import React, { useState, useRef } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import Lottie from 'lottie-react-web'
import * as animationData from '../../Animations/search2.json'

const Search = () => {
    const [toggle, setToggle] = useState(false)
    const inputRef: any = useRef<HTMLInputElement>(null)

    const defaultOptions = {
        loop: false,
        autoplay: toggle,
        //@ts-ignore
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
        <section className="border-b border-border border-l flex justify-around items-center p-2 bg-secondary rounded h-10 mt-8">
            <input onBlur={onFocus} onFocus={onFocus} ref={inputRef} type="text" placeholder="Search News" className="w-9/12 focus:outline-none bg-secondary text-sm text-input placeholder-input font-semibold" />
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
