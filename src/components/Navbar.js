import React from 'react'
import {NavLink, Navigate} from 'react-router-dom'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'

// styles
import './Navbar.css'
// components
import Searchbar from './Searchbar'

// hooks
import {useTheme} from '../hooks/useTheme'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Navbar() {
    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()
    const {mode} = useTheme()

    return (
    <div className={`navbar ${mode}`}>
        <nav>
            <SoupKitchenIcon className='icon'/>
            <NavLink to='/' className='brand'><h1>Cooking with Eugenie</h1></NavLink>
            <Searchbar />
            <NavLink to='/create'><h1>Create recipe</h1></NavLink>
        </nav>
        {!user && (
            <>
                <li><Navigate to="/login">Login</Navigate></li>
                <li><Navigate to="/signup">Signup</Navigate></li>
            </>
        )}

        {user && (
            <li>
                {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                {isPending && <button className="btn" disabled>Logging out...</button>}
            </li>
        )}
    </div>
    )
    }
