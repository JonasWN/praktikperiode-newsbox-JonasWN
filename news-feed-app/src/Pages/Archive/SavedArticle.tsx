import React, { useState, useEffect } from 'react'
import { title } from 'process'
import SavedText from './SavedText'
import { v4 as uuidv4 } from "uuid";

interface Props {
    catagory: string,
    savedList: any,
    delArticle: (id: string) => void
}

const SavedArticle: React.FC<Props> = ({ catagory, savedList, delArticle }) => {

    const [checked, setChecked]: any = useState([])

    useEffect(() => {
        let checkList = savedList.filter((article: any) => article.catagory === catagory)
        setChecked([...checkList])
    }, [savedList])

    return (
        <React.Fragment>
            {checked.map((article: any) => {
                return (
                    <section className='h-24 py-4 border-border border-t px-4' key={uuidv4()}>
                        <SavedText link={article.link} img={article.cover} header={article.title} description={article.description} delArticle={delArticle} id={article.id} />
                    </section>
                )
            })}
        </React.Fragment>
    )
}


export default SavedArticle
