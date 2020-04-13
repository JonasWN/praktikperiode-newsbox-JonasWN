import React, { useEffect, useState } from 'react'
import Summary from './Summary'
import Article from './Article'


interface Props {
    articles: {
        title: string;
        checked: boolean;
    }[],
    saveArticle: (title: string, description: string, cover: string, link: string, catagory: string) => void,
    refresh: boolean,
    setFreshed: () => void
}

const Catagory: React.FC<Props> = ({ articles, saveArticle, refresh, setFreshed }) => {
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
                        <details className="border-border mb-12" >
                            <Summary title={item.title} />
                            <Article title={item.title} saveArticle={saveArticle} refresh={refresh} setFreshed={setFreshed} />
                        </details>
                        : <details className="border-border" >
                            <Summary title={item.title} />
                            <Article title={item.title} saveArticle={saveArticle} refresh={refresh} setFreshed={setFreshed} />
                        </details>}
                </React.Fragment>
            )
        })
    )
}

export default Catagory
