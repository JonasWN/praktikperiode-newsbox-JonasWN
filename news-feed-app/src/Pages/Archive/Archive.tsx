import React from 'react'
import Catagory from '../../Components/Catagory/Catagory'
import SavedCatagory from './SavedCatagory'

interface Props {
    savedList: any,
    articles: {
        title: string;
        checked: boolean;
        id: string;
    }[],
    delArticle: (id: string) => void
}

const Archive: React.FC<Props> = ({ savedList, articles, delArticle }) => {
    return (
        <main className="">
            <SavedCatagory savedList={savedList} articles={articles} delArticle={delArticle} />
        </main>
    )
}

export default Archive
