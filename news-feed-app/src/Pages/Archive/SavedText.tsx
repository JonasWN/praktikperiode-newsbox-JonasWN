import React, { useState, useContext } from 'react'
import { motion, useTransform, useSpring } from 'framer-motion'
import { MdDeleteSweep } from 'react-icons/md'
import Lottie from 'react-lottie';
import * as animationData from '../../Animations/del.json'
import { SaveArticleContext } from '../../Context/SaveArticleContext'

const defaultOptions = {
    loop: false,
    autoplay: true,
    //@ts-ignore
    animationData: animationData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
};

interface Props {
    link: string,
    img: string,
    header: string,
    description: string,
    id: any
}

const Text: React.FC<Props> = ({ link, img, header, description, id }) => {
    const [savedList, saveArticle, delArticle] = useContext(SaveArticleContext)
    const [saved, setSaved] = useState(false)
    const x = useSpring(0, { stiffness: 600, damping: 200, })
    const width = useTransform(x, [-120, 0], [800, 0])
    const coverX = useTransform(x, [-120, 0], [-50, 0])
    const [swiped, setSwiped] = useState(false)

    async function handleDragEnd() {
        if (swiped)
            await delArticle(id)
    }

    async function handleDrag(event: any, info: any) {
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
        <div className="flex">
            <motion.img src={img} style={{ x: coverX }} alt="Article Cover" className="mr-4 filter-img object-contain w-16 rounded-full shadow-lg" />
            <motion.article className='h-full leading-5 min-text mr-6' style={{ x: coverX }}>
                <a href={link}> <h3 className="text-catagoryHd font-bold text-sm hd-clamp">{header}</h3></a>
                <p className="line-clamp text-font font-light text-sm">{description}</p>
            </motion.article>
            <motion.div onDrag={handleDrag} onDragEnd={saved ? handleDragEnd : () => null} style={{ x }} drag={"x"} dragConstraints={{ left: 0, right: 0 }} className="w-16 absolute right-0 top-0 h-full"></motion.div>
            <motion.div style={{ width }} className=" w-4 bg-btnDel flex justify-center items-center -m-4">
                {
                    saved ? <Lottie options={defaultOptions} height={60} width={60} />
                        : <MdDeleteSweep className="text-secondary text-3xl" />
                }
            </motion.div>
        </div>

    )
}

export default Text
