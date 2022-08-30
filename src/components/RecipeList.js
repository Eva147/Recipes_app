import React from 'react'
import {NavLink} from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Trashcan from '../assets/trashcan.svg'
// firestore db
import {db} from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";
// styles
import './RecipeList.css'

export default function RecipeList({recipes}) {
    const {mode} = useTheme()

    if (recipes.length === 0) {
        return <div className={`error ${mode}`}>No such recipes... but you can add it!</div>
    }

    const handleClick = async (id) => {
        await deleteDoc(doc(db, 'recipes', id))
    }

    return (
        <div className={'recipe-list'}>
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{`${recipe.cookingTime} to make.`}</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <NavLink to={`/recipes/${recipe.id}`}>I want to cook it</NavLink>
                    <img
                        className='delete' 
                        src={Trashcan} alt='delete'
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    )
}