import React from 'react'
import {NavLink} from 'react-router-dom'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'
import { useTheme } from '../hooks/useTheme'

// styles
import './Navbar.css'
// components
import Searchbar from './Searchbar'

// hooks
// import {useTheme} from '../hooks/useTheme'


export default function Navbar() {

  const {mode} = useTheme()

  return (
    <div className={`navbar ${mode}`}>
        <nav>
            <SoupKitchenIcon className='icon'/>
            <NavLink to='/' className='brand'><h1>Cooking with Eugenie</h1></NavLink>
            <Searchbar />
            <NavLink to='/create'><h1>Create recipe</h1></NavLink>
        </nav>
    </div>
  )
}
