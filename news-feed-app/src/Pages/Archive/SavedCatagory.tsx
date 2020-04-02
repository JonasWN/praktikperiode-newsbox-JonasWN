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
        <React.Fragment>
            {checked.map((item: any) => {
                return (
                    <details className="border-border border-t" key={item.id}>
                        <Summary title={item.title} />
                        <SavedArticle catagory={item.title} savedList={savedList} delArticle={delArticle} />
                    </details>
                )
            })}
        </React.Fragment>
    )
}

export default SavedCatagory
