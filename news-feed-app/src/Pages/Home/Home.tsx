import React, { useRef, useEffect, useState } from 'react'
import Catagory from '../../Components/Catagory/Catagory'
import Pullable from 'react-pullable'

interface Props {

}

const Home: React.FC<Props> = ({ }) => {
    const [refresh, setRefresh] = useState(false)

    // useEffect(() => {
    //     window.addEventListener('scroll', (e) => console.log(window.pageYOffset));

    //     return () => window.removeEventListener('scroll', (e) => console.log(e.target))
    // })

    const refreshed = () => {
        setRefresh(false)
    }

    return (
        <main className="">
            <Pullable onRefresh={() => setRefresh(!refresh)}> </Pullable>
            <Catagory refresh={refresh} setFreshed={refreshed} />
        </main>
    )
}

export default Home
