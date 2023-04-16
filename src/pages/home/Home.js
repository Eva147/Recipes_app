import React from 'react'
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useTheme } from '../../hooks/useTheme'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList';


export default function Home() {
    const {mode} = useTheme()
    const {user} = useAuthContext()
    const {documents: recipes, isPending, error} = useCollection(
      'recipes',
      // ['uid', '==', true]
    )

    return (
        <div className='home'>
           {error && <p className={`error ${mode}`}>{error}</p>}
           {isPending && <p className='loading'>Loading...</p>}
           {recipes && <RecipeList recipes={recipes} />}
        </div>
    );
}
