import React from 'react'
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
// styles
import './Search.css'
// components
import RecipeList from '../../components/RecipeList';


export default function Search() {
    const {mode} = useTheme()
    // get query parameter (query string) from the search bar
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    // send request to useFetch hook to get recipes
    const url = `http://localhost:3000/recipes?q=${query}`
    const {error, isPending, data} = useFetch(url)

    return (
        <div>
            <h2 className={`page-title ${mode}`}>Recipes including "{query}"</h2>
            {error && <p className={`error ${mode}`}>{error}</p>}
            {isPending && <p className={`pending ${mode}`}>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}