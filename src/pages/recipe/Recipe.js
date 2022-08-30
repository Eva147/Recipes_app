import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
// firestore db
import {db} from '../../firebase/config'
import {doc, getDoc} from 'firebase/firestore'
// styles
import './Recipe.css'

export default function Recipe() {
    const {mode} = useTheme()
    // use id from the path to this component in app.js (everything after ':')
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const ref = doc(db, 'recipes', id)
        getDoc(ref)
        .then((doc) => {
            if(doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('Could not find the recipe.')
            }
            }).catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, [id])
    

    return (

        <div className={`recipe ${mode}`}>
           {error && <p className={`error ${mode}`}>{error}</p>}
           {isPending && <p className='loading'>Pending...</p>}
           {recipe && 
           <>
            <h2 className='page-title'>{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
                {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p className='method'>{recipe.method}</p>
           </>
           }
        </div>
    );
}