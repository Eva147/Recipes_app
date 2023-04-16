import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useCollection } from '../../hooks/useCollection';
// styles
import './Search.css'
// components
import RecipeList from '../../components/RecipeList';

export default function Search() {
    const {mode} = useTheme()

    // get query parameter (query string) from the search bar
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const q = queryParams.get('q')

    const {documents: recipes, isPending, error} = useCollection(
      'recipes',
      ['title', 'array-contains', q],
    );

    return (
        <div>
            <h2 className={`page-title ${mode}`}>Recipes including "{q}"</h2>
            {error && <p className={`error ${mode}`}>{error}</p>}
            {isPending && <p className={`pending ${mode}`}>Loading...</p>}
            {recipes && <RecipeList recipes={recipes} />}
        </div>
    );
}
