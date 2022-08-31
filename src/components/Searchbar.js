import { useTheme } from '../hooks/useTheme'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// styles
import './Searchbar.css'



export default function Searchbar() {

  const {mode} = useTheme()

  const navigate = useNavigate()
  const [term, setTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }

  return (
    <div className={`searchbar ${mode}`}>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search:</label>
            <input 
                type='text'
                id='search'
                onChange={e => setTerm(e.target.value)}
                required
            />
        </form>
    </div>
  )
}
