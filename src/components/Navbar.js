import React from 'react'
import {NavLink} from 'react-router-dom'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'

// styles
import './Navbar.css'
// components
// import Searchbar from './Searchbar'

// hooks
import {useTheme} from '../hooks/useTheme'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const {mode} = useTheme()
console.log(user);
    return (
    <div className={`navbar ${mode}`}>
        <nav>
            <SoupKitchenIcon className='icon'/>
            <NavLink to='/' className='brand'><h1>Cooking with Eugenie</h1></NavLink>
            {/*<Searchbar />*/}
            <NavLink to='/create' className='createBtn'><h1>Create recipe</h1></NavLink>
            {!user && (
              <>
                  <NavLink to="/login" className='loginBtn'>Login</NavLink>
                  <NavLink to="/signup" className='loginBtn'>Signup</NavLink>
              </>
            )}
            {user && (
              <>
                  <NavLink to="/login" className="loginBtn" onClick={logout}>Logout</NavLink>
              </>
            )}
        </nav>
    </div>
    )
}
