import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from "uuid";

export const SettingsContext: any = createContext([]);

export const SettingsProvider: React.FC = (props: any) => {
    const [checkedList, setCheckedList] = useState([
        {
            title: 'Europe',
            checked: true,
            id: uuidv4(),
        },
        {
            title: 'Health',
            checked: true,
            id: uuidv4(),
        },
        {
            title: 'Sports',
            checked: true,
            id: uuidv4(),
        },
        {
            title: 'Business',
            checked: true,
            id: uuidv4(),
        },
        {
            title: 'Travel',
            checked: true,
            id: uuidv4(),
        },
    ])

    // check if catagory is checked and should be listed
    const check = (catagory: string, state: boolean) => {
        let updated = {
            title: catagory,
            checked: state,
            id: uuidv4(),
        }
        let pos = checkedList.map(function (e) { return e.title; }).indexOf(catagory); // Find the index of the catagory that was changed in the array
        let newArray = [...checkedList] // Copy old CheckedList
        newArray[pos] = updated // Replace the Index with the updated state of it in var-updated
        setCheckedList(newArray)
    }

    const swapOrder = (order: any) => {
        let newList: any = []
        for (let i = 0; i < order.length; i++) {
            let first = checkedList[i]
            first = checkedList[order[i]]
            // newList[i].title = newList[order[i]].title
            newList.push(first)
        }
        console.log(newList)
        setCheckedList(newList)

    }
    return (
        <SettingsContext.Provider value={[checkedList, setCheckedList, check, swapOrder]}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext
