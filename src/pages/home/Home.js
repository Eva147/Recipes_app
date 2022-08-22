import React, { useState, useEffect } from 'react'
// import {useFetch} from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme';
// firestore db
import {db} from '../../firebase/config'
import {collection, getDocs} from 'firebase/firestore'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList';


export default function Home() {
    const {mode} = useTheme()
    
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const ref = collection(db, 'recipes')
        getDocs(ref)
            .then((snapshot) => {
                if(snapshot.empty) {
                    setError('No recipes to load.')
                    setIsPending(false)
                } else {
                    let results = []
                    snapshot.docs.forEach(doc => {
                        results.push({id: doc.id, ...doc.data()})
                    })
                    setData(results)
                    setIsPending(false)
                }
            }).catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, [])



    return (
        <div className='home'>
           {error && <p className={`error ${mode}`}>{error}</p>}
           {isPending && <p className='loading'>Loading...</p>}
           {data && <RecipeList recipes={data} />}
        </div>
    );
}