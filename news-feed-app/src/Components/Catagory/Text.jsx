import React, { useState } from 'react'
import { motion, useTransform, useSpring, useAnimation } from 'framer-motion'
import { AiOutlineInbox } from 'react-icons/ai'
import Lottie from 'react-lottie';
import * as animationData from '../../Animations/complete.json'

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
};

const Text = ({ link, img, header, description, saveArticle, catagory }) => {
    const [saved, setSaved] = useState(false)
    const x = useSpring(0, { stiffness: 600, damping: 200, })
    const width = useTransform(x, [-120, 0], [800, 0])
    const [swiped, setSwiped] = useState(false)

    function handleDragEnd() {
        if (saved) {
            window.requestIdleCallback(() => saveArticle(header, description, img, link, catagory))
        }
    }

    async function handleDrag(event, info) {
        const offset = info.offset.x

        if (offset < -200) {
            setSaved(true)
            setSwiped(true)
        }
        else {
            setSaved(false)
        }

    }

    return (
        <motion.div onDrag={handleDrag} onDragTransitionEnd={handleDragEnd} style={{ x }} drag={"x"} dragConstraints={{ left: 0, right: 0 }} className="flex">
            {/* {swiped ? <div className="relative z-0 w-2 bg-btnAdd -m-4"></div> : null} */}
            <img src={img} alt="Article Cover" className="mr-4 filter-img object-contain w-16 rounded-full shadow-lg" />
            <article className='h-full leading-5 min-text mr-6'>
                <a href={link}> <h3 className="text-catagoryHd font-bold text-sm hd-clamp">{header}</h3></a>
                <p className="line-clamp text-font font-light text-sm">{description}</p>
            </article>
            <motion.div style={{ width }} className=" w-0 bg-btnAdd flex justify-center items-center -m-4">
                {
                    saved ? <Lottie options={defaultOptions} height={60} width={60} />
                        : <AiOutlineInbox className="text-secondary text-2xl" />
                }
            </motion.div>

        </motion.div>

    )
}

export default Text
