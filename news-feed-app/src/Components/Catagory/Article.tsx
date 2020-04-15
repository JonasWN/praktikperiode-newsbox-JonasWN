import React, { useState, useEffect } from 'react'
import Cover from '../../Assets/images/article.png'
import useAsyncHook from './useAsyncHook'
import { v4 as uuidv4 } from "uuid";
import Text from './Text'
import Lottie from 'react-lottie';
import * as animationData from '../../Animations/loading (2).json'


interface Props {
    title: string,
    saveArticle: (title: string, description: string, cover: string, link: string, catagory: string) => void,
    refresh: boolean,
    setFreshed: () => void
}

const Article: React.FC<Props> = ({ title, saveArticle, refresh, setFreshed }) => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState(`https://rss.nytimes.com/services/xml/rss/nyt/${title}.xml`);
    const [result, loading]: any = useAsyncHook(query);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        // @ts-ignore
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };

    useEffect(() => {
        if (refresh === true) {
            setQuery(`https://rss.nytimes.com/services/xml/rss/nyt/${title}.xml`)
            setFreshed()
        }
    }, [refresh])

    return (
        <React.Fragment>
            {loading === true && <Lottie options={defaultOptions}

            />}
            {result.map((article: any) => {
                return (
                    <section className='h-24 py-4 border-border border-b px-4 relative' key={uuidv4()}>
                        <Text catagory={title} link={article.link["#text"]} img={article["media:content"] !== undefined ? article["media:content"]["@attributes"].url : Cover} header={article.title["#text"]} description={article.description["#text"]} />
                    </section>
                )
            })}
        </React.Fragment>
    )
}

export default Article
