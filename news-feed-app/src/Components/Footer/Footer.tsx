import React from 'react'
import { GoHome } from "react-icons/go";
import { AiOutlineToTop } from 'react-icons/ai';
import { IoIosRefresh } from 'react-icons/io';
import { MdFilterBAndW } from "react-icons/md";
import Theme from './Theme';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";


const Footer: React.FC = () => {
    let match = useLocation()
    let title = match.pathname.replace('/', "")

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="h-12 w-full fixed bottom-0 left-0 footer-shadow bg-primary z-20">
            <ul className="flex h-full justify-around items-center">
                <li className="h-full w-auto flex justify-center items-center">
                    {title === "" ? <Link to="/"> <GoHome className="text-2xl text-footer" /> </Link> : <Link to="/"> <GoHome className="text-2xl text-catagoryHd" /> </Link>}
                </li>
                <li className="h-full w-auto flex justify-center items-center">
                    <AiOutlineToTop onClick={scrollToTop} className="text-2xl text-catagoryHd" />
                </li>
                <li className="bg-catagoryHd footer-btn mb-12 bg-btn-delete rounded-full flex justify-center items-center">
                    <IoIosRefresh className="text-2xl text-primary" />
                </li>
                <Theme />
                <li className="h-full w-auto flex justify-center items-center"  >
                    <MdFilterBAndW className="text-2xl text-catagoryHd" />
                </li>
            </ul>
        </footer>
    )
}

export default Footer
