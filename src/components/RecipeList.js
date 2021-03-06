import React from 'react'
import {NavLink} from 'react-router-dom'
// styles
import './RecipeList.css'

export default function RecipeList({recipes}) {

    if (recipes.length === 0) {
        return <div className='error'>No such recipes... but you can add it!</div>
    }
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='card'>
                    <h3>{recipe.title}</h3>
                    <p>{`${recipe.cookingTime} to make.`}</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <NavLink to={`/recipes/${recipe.id}`}>I want to cook it</NavLink>
                </div>
            ))}
        </div>
    )
}