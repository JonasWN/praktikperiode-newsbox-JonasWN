import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

export const SaveArticleContext: any = createContext([])

export const SaveArticleProvider: React.FC = (props: any) => {
    const [savedList, setSaved]: any = useState([])

    // save article to archieve
    const saveArticle = (title: string, description: string, cover: string, link: string, catagory: string) => {
        const index = savedList.findIndex((article: any) => article.title === title)

        // if article is not saved => save it
        if (index === -1) {
            let savedArticle = {
                title: title,
                description: description,
                cover: cover,
                link: link,
                catagory: catagory,
                id: uuidv4()
            }
            setSaved([...savedList, savedArticle])
        }
    }

    // delete article from archieves
    const delArticle = (id: string) => {
        setSaved([...savedList.filter((article: any) => article.id !== id)])
    }

    return (
        <SaveArticleContext.Provider value={[savedList, saveArticle, delArticle]}>
            {props.children}
        </SaveArticleContext.Provider>
    )
}

