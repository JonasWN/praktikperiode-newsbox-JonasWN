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
    const coverX = useTransform(x, [-120, 0], [-50, 0])
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
        }
        else {
            setSaved(false)
        }

    }

    return (
        <div className="flex">
            <motion.img src={img} style={{ x: coverX }} alt="Article Cover" className="mr-4 filter-img object-contain w-16 rounded-full shadow-lg" />
            <motion.article className='h-full leading-5 min-text mr-6' style={{ x: coverX }}>
                <a href={link}> <h3 className="text-catagoryHd font-bold text-sm hd-clamp">{header}</h3></a>
                <p className="line-clamp text-font font-light text-sm">{description}</p>
            </motion.article>
            <motion.div onDrag={handleDrag} onDragTransitionEnd={saved ? handleDragEnd : null} style={{ x }} drag={"x"} dragConstraints={{ left: 0, right: 0 }} className="w-16 absolute right-0 top-0 h-full"></motion.div>
            <motion.div style={{ width }} className=" w-4 bg-btnAdd flex justify-center items-center -m-4">
                {
                    saved ? <Lottie options={defaultOptions} height={60} width={60} />
                        : <AiOutlineInbox className="text-secondary text-2xl" />
                }
            </motion.div>
        </div>

    )
}

export default Text
