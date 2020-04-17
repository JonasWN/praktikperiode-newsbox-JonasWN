import React, { useState } from 'react'
import CatagoryIcon from '../../Assets/images/surf.svg'
import Lottie from 'lottie-react-web';
import * as animationData from '../../Animations/bookmark.json'

interface Props {
    title: string,
}

const Summary: React.FC<Props> = ({ title }) => {
    const [loaded, setLoaded] = useState(false)
    const [open, setOpen] = useState(false)

    const defaultOptions = {
        loop: false,
        autoplay: true,
        //@ts-ignore
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };

    return (
        <summary className='flex items-center h-12 px-4 sticky z-10 top-0 bg-primary border-border border-b' onClick={() => setOpen(!open)}>
            <div className='flex items-center' >
                <picture className='shadow-lg rounded-full h-8 w-8 p-1 flex justify-center items-center mr-2'>
                    <img src={CatagoryIcon} alt="Catagory Icon" className='w-4/5' />
                </picture>
                <h2 className='text-catagoryHd font-bold uppercase text-sm'>{title}</h2>
            </div>
            {/* <IoIosArrowForward className="ml-auto" /> */}
            <div className="ml-40 ml-auto flex items-center h-12">
                <Lottie options={defaultOptions}
                    height={225}
                    width={12}
                    direction={open ? 1 : -1}
                    style={{ pointerEvents: 'none' }}
                // style={{ transform: 'rotate(90deg)' }}
                />

            </div>
        </summary>
    )
}

export default Summary
