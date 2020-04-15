import React, { useRef, useEffect, useState } from 'react'
import Catagory from '../../Components/Catagory/Catagory'
import Pullable from 'react-pullable'

interface Props {
    articles: {
        title: string;
        checked: boolean;
    }[],
    saveArticle: (title: string, description: string, cover: string, link: string, catagory: string) => void,
}

const Home: React.FC<Props> = ({ articles, saveArticle }) => {
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
            <Catagory articles={articles} saveArticle={saveArticle} refresh={refresh} setFreshed={refreshed} />
        </main>
    )
}

export default Home
