import React from 'react'
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
// styles
import './Search.css'
// components
import RecipeList from '../../components/RecipeList';

export default function Search() {
    // get query parameter (query string) from the search bar
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    // send request to useFetch hook to get recipes
    const url = `http://localhost:3000/recipes?q=${query}`
    const {error, isPending, data} = useFetch(url)

    return (
        <div>
            <h2 className='page-title'>Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='pending'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}