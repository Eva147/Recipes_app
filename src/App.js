import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useTheme } from './hooks/useTheme';


// page components
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import ThemeSelector from './components/ThemeSelector';

// styles
import './App.css'

function App() {
    const { authIsReady, user } = useAuthContext()
    const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
        {authIsReady && (
            <BrowserRouter>
                <div className="container">
                    <Navbar />
                    <ThemeSelector />
                    <Routes>
                        <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />} />
                        <Route path="/create" element={user ? <Create /> : <Navigate to="/login" />} />
                        <Route path="/recipes/:id" element={user ? <Recipe /> : <Navigate to="/login" />} />
                        <Route path="/search" element={user ? <Search /> : <Navigate to="/login" />} />
                        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )}
    </div>
  );
}

export default App
