import React from 'react'
import Catagory from '../../Components/Catagory/Catagory'


interface Props {
    articles: {
        title: string;
        checked: boolean;
    }[],
    saveArticle: (title: string, description: string, cover: string, link: string, catagory: string) => void,

}

const Home: React.FC<Props> = ({ articles, saveArticle }) => {
    return (
        <main className="">
            <Catagory articles={articles} saveArticle={saveArticle} />
        </main>
    )
}

export default Home
