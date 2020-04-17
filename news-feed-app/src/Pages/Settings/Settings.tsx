import React from 'react'
import Checked from './Checked'
import Toggle from './Toggle'

interface Props {

}

const Settings: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <main className="bg-settings pb-12 h-screen px-4">
                <div className="text-center p-4 ">
                    <h2 className="text-btnAdd font-semibold text-2xl">Manage</h2>
                    <h3 className="text-sm font-normal text-catagoryHd">Catagories</h3>
                </div>
                <ul className="bg-primary rounded-lg shadow-lg w-full relative" style={{ height: '240px' }}>
                    <Checked />
                </ul>
                <Toggle />
            </main>
        </React.Fragment>
    )
}

export default Settings
