import React, { useState } from 'react'
import Catagory from '../../Components/Catagory/Catagory'
import Pullable from 'react-pullable'

interface Props {

}

const Home: React.FC<Props> = ({ }) => {
    const [refresh, setRefresh] = useState(false)

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
