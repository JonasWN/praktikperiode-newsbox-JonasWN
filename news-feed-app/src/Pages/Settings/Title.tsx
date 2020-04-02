import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

interface Props {
    title: string,
    checkState: (catagory: string, state: boolean) => void,
    artChecked: boolean
}

const Title: React.FC<Props> = ({ title, checkState, artChecked }) => {
    const [checked, setChecked] = useState(artChecked)

    const id = uuidv4()

    const check = (e: any) => {
        checkState(title, !checked)
    }
    uuidv4()
    return (
        <React.Fragment>
            <h3 className="text-catagoryHd font-bold uppercase text-sm">{title}</h3>
            <input className="tgl tgl-light" type="checkbox" id={id} onClick={check} checked={checked} onChange={e => { }} />
            <label className="tgl-btn" htmlFor={id} ></label>
        </React.Fragment>
    )
}

export default Title
