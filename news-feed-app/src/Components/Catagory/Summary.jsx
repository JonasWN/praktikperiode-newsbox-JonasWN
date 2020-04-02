import React, { useState } from 'react'
import CatagoryIcon from '../../Assets/images/surf.svg'
import { IoIosArrowForward } from "react-icons/io";
import Lottie from 'react-lottie';
import * as animationData from '../../Animations/open.json'

const Summary = ({ title }) => {
    const [loaded, setLoaded] = useState(false)

    setTimeout(() => {
        setLoaded(true)
    }, 1000);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };

    return (
        <summary className='flex items-center h-12 px-4'>
            <div className='flex items-center'>
                <picture className='shadow-lg rounded-full h-8 w-8 p-1 flex justify-center items-center mr-2'>
                    <img src={CatagoryIcon} alt="Catagory Icon" className='w-4/5' />
                </picture>
                <h2 className='text-catagoryHd font-bold uppercase text-sm'>{title}</h2>
            </div>
            {/* <IoIosArrowForward className="ml-auto" /> */}
            <div className="ml-auto h-12 flex items-center rotate-90">
                {loaded &&
                    <Lottie options={defaultOptions}
                        height={25}
                        width={25}
                        style={{ transform: 'rotate(90deg)' }}
                        segments={[1, 5]}
                    />
                }
            </div>
        </summary>
    )
}

export default Summary
