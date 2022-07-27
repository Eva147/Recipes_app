import React from 'react'
import {useFetch} from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme';

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList';


export default function Home() {
    const {mode} = useTheme()
    const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

    return (
        <div className='home'>
           {error && <p className={`error ${mode}`}>{error}</p>}
           {isPending && <p className='loading'>Loading...</p>}
           {data && <RecipeList recipes={data} />}
        </div>
    );
}