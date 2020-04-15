import React from 'react'
import Checked from './Checked'
import Toggle from './Toggle'

interface Props {
    list: {
        title: string;
        checked: boolean;
        id: string;
    }[]
    checked: (catagory: string, state: boolean) => void,
    swapOrder: (order: any) => void
}

const Settings: React.FC<Props> = ({ list, checked, swapOrder }) => {
    return (
        <React.Fragment>
            <main className="bg-settings settings-height px-4">
                <div className="text-center p-8 ">
                    <h2 className="text-btnAdd font-semibold text-2xl">Manage</h2>
                    <h3 className="text-sm font-normal text-catagoryHd">Catagories</h3>
                </div>
                <ul className="bg-primary rounded-lg shadow-lg w-full relative" style={{ height: '240px' }}>
                    <Checked list={list} checked={checked} swapOrder={swapOrder} />
                </ul>
                <Toggle />
            </main>
        </React.Fragment>
    )
}

export default Settings
