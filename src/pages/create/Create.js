import React from 'react';
import {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAuthContext } from "../../hooks/useAuthContext";
// firestore db
import {db} from '../../firebase/config';
import {collection, addDoc} from 'firebase/firestore';
// styles
import './Create.css';


export default function Create() {

    const {mode} = useTheme()
    const {user} = useAuthContext();
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setNewIngredients] = useState([])
    // create a ref to focus on the input for ings
    const ingredientInput = useRef(null)
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const ref = collection(db, 'recipes')
        const doc = {uid: user.uid, title, ingredients, method, cookingTime: `${cookingTime} minutes`}
        try {
            await addDoc(ref, doc)
            navigate("/");
        } catch(error) {
            console.log(error)
        }
    }

    const handleAdd = e => {
        e.preventDefault()
        // trim() take away whitespace from ingredient
        const ing = newIngredient.trim()
        // if there are ingredients in the array and there is no this new ingredient, then add it to the array
        if (ing && !ingredients.includes(ing)) {
            setNewIngredients(prevIngrediens => [...prevIngrediens, ing])
        }
        // empty the input for a new ingredient
        setNewIngredient('')
        // use focus method to focus the input field (the cursor is there while user add ings)
        ingredientInput.current.focus()
    }

    return (
        <div className={`create ${mode}`}>
            <h2 className='page-title'>Add a new recipe:</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients:</span>
                    <div className='ingredients'>
                        <input
                            type='text'
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            // focus input to not to click on the input every time when add ings
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className='btn'>add</button>
                    </div>
                </label>
                <p>Current ingredients:{ingredients.map(i => <em key={i}>{i}, </em>)}</p>

                <label>
                    <span>Recipe method:</span>
                    <textarea
                        onChange={e => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time (minutes):</span>
                    <input
                        type="number"
                        onChange={e => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className='btn'>Submit</button>
            </form>

        </div>
    );
}
