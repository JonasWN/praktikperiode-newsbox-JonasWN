import React, { useState, useEffect } from 'react'
import Xml from './xml'
import Json from './json'

/**
 * Returns Xml data to Json Format
 * @typedef {object} result 
 * @param {string} url Fetched url
 * @return {result} 
 * @return {boolean} loading 
 */

function useAsyncHook(url: string) {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                let xmltext = await Xml(url)
                const data: any = await Json(xmltext)
                setResult(data.rss.channel.item)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [url])

    return [result, loading];
}

export default useAsyncHook
