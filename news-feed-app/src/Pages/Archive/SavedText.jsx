import React, { useState } from 'react'
import { motion, useTransform, useSpring, useAnimation } from 'framer-motion'
import { MdDeleteSweep } from 'react-icons/md'
import Lottie from 'react-lottie';
import * as animationData from '../../Animations/del.json'

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
};

const Text = ({ link, img, header, description, delArticle, id }) => {
    const [saved, setSaved] = useState(false)
    const x = useSpring(0, { stiffness: 600, damping: 200, })
    const width = useTransform(x, [-120, 0], [800, 0])
    const [swiped, setSwiped] = useState(false)

    async function handleDragEnd() {
        if (swiped)
            await delArticle(id)
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
        <motion.div onDrag={handleDrag} style={{ x }} onDragEnd={handleDragEnd} drag={"x"} dragConstraints={{ left: 0, right: 0 }} className="flex">
            <img src={img} alt="Article Cover" className="mr-4 filter-img object-contain w-16 rounded-full shadow-lg" />
            <article className='h-full leading-5 min-text mr-6'>
                <a href={link}> <h3 className="text-catagoryHd font-bold text-sm hd-clamp">{header}</h3></a>
                <p className="line-clamp text-font font-light text-sm">{description}</p>
            </article>
            <motion.div style={{ width }} className=" w-0 bg-btnDel flex justify-center items-center -m-4">
                {
                    saved ? <Lottie options={defaultOptions} height={60} width={60} />
                        : <MdDeleteSweep className="text-secondary text-3xl" />
                }
            </motion.div>

        </motion.div>

    )
}

export default Text
