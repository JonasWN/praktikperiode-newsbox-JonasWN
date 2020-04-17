import React, { useState, useEffect, useContext } from 'react'
import { title } from 'process'
import SavedText from './SavedText'
import { v4 as uuidv4 } from "uuid";
import { SaveArticleContext } from '../../Context/SaveArticleContext'

interface Props {
    catagory: string,
}

const SavedArticle: React.FC<Props> = ({ catagory }) => {
    const [savedList] = useContext(SaveArticleContext)
    const [checked, setChecked]: any = useState([])

    useEffect(() => {
        let checkList = savedList.filter((article: any) => article.catagory === catagory)
        setChecked([...checkList])
    }, [savedList])

    return (
        <React.Fragment>
            {checked.map((article: any) => {
                return (
                    <section className='h-24 py-4 border-border border-b px-4 relative' key={uuidv4()}>
                        <SavedText link={article.link} img={article.cover} header={article.title} description={article.description} id={article.id} />
                    </section>
                )
            })}
        </React.Fragment>
    )
}


export default SavedArticle
