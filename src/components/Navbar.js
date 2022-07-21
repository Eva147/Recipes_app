import React from 'react'
import {NavLink} from 'react-router-dom'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <SoupKitchenIcon className='icon'/>
            <NavLink to='/' className='brand'><h1>Cooking with Eugenie</h1></NavLink>
            <Searchbar />
            <NavLink to='/create'><h1>Create recipe</h1></NavLink>
        </nav>
    </div>
  )
}
