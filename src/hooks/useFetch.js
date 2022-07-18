import {useState, useEffect} from 'react'

export const useFetch = (url, method="GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    // options for postData function
    const [options, setOptions] = useState(null)


    // the function is returned from this hook with data (for db.json)
    const postData = (postData) => {
        // construct fetch options to fetch data
        setOptions({
            method: "POST",
            // outlines the type of data that is sent through post request
            headers: {
                "Content-Type": "application/json"
            }, 
            // stringify turns a js object into JSON string
            body: JSON.stringify(postData)
        })

    }

    useEffect(() => {
        const controller = new AbortController()
        // fetchOptions (options) were sent from 'POST' method
        const fetchData = async(fetchOptions) => {
            setIsPending(true)

            try {
                const res = await fetch(url, {...fetchOptions, signal: controller.signal})
                if(!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()
                setIsPending(false)
                setData(data)
                setError(null)
            } catch(error) {
                if(error.name === "AbortError") {
                    console.log('the fetch was aborted')
                } else {
                    setIsPending(false)
                    setError('could not fetch the data')
                }
            }
        }

        // check if the value of method is GET or POST
        if (method === 'GET') {
            fetchData()
        }
        if (method === 'POST' && options) {
            fetchData(options)
        }
        

        return () => {
            controller.abort()
        }
    }, [url, options, method])

    return {data, isPending, error, postData}
}