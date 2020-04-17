import React from 'react'
import Catagory from '../../Components/Catagory/Catagory'
import SavedCatagory from './SavedCatagory'

interface Props {

}

const Archive: React.FC<Props> = () => {
    return (
        <main className="">
            <SavedCatagory />
        </main>
    )
}

export default Archive
