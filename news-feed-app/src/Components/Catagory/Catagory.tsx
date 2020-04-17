import React, { useEffect, useState, useContext, useRef, createRef } from 'react'
import Summary from './Summary'
import Article from './Article'
import { SettingsContext } from '../../Context/SettingsContext'

interface Props {
    refresh: boolean,
    setFreshed: () => void
}

const Catagory: React.FC<Props> = ({ refresh, setFreshed }) => {
    const [checked, setChecked]: any = useState([])
    const [settings, setSettings, check] = useContext(SettingsContext)

    useEffect(() => {
        let checkList = settings.filter((article: any) => article.checked === true)
        setChecked([...checkList])
    }, [settings])

    return (
        checked.map((item: any, id: any) => {
            return (
                <React.Fragment key={item.id}>
                    {id === checked.length - 1 ?
                        <details className="border-border mb-12" >
                            <Summary title={item.title} />
                            <Article title={item.title} refresh={refresh} setFreshed={setFreshed} />
                        </details>
                        : <details className="border-border"  >
                            <Summary title={item.title} />
                            <Article title={item.title} refresh={refresh} setFreshed={setFreshed} />
                        </details>}
                </React.Fragment>
            )
        })
    )
}

export default Catagory
