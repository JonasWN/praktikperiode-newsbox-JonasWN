import React, { useState, useEffect } from 'react'
import Summary from '../../Components/Catagory/Summary'
import Article from '../../Components/Catagory/Article'
import SavedArticle from './SavedArticle'

interface Props {
    savedList: any,
    articles: {
        title: string;
        checked: boolean;
    }[],
    delArticle: (id: string) => void
}

const SavedCatagory: React.FC<Props> = ({ savedList, articles, delArticle }) => {
    const [checked, setChecked]: any = useState([])

    useEffect(() => {
        let checkList = articles.filter(article => article.checked === true)
        setChecked([...checkList])
    }, [articles])

    return (
        checked.map((item: any, id: any) => {
            return (
                <React.Fragment key={item.id}>
                    {id === checked.length - 1 ?
                        <details className="border-border mb-12">
                            <Summary title={item.title} />
                            <SavedArticle catagory={item.title} savedList={savedList} delArticle={delArticle} />
                        </details>
                        : <details className="border-border" >
                            <Summary title={item.title} />
                            <SavedArticle catagory={item.title} savedList={savedList} delArticle={delArticle} />
                        </details>}
                </React.Fragment>
            )
        })
    )
}

export default SavedCatagory
