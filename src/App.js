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
                        <Route exact path="/">
                            {!user && <Navigate to="/login" />}
                            {user && <Home />}
                        </Route>
                        <Route path="/create">
                            {!user && <Navigate to="/login" />}
                            {user && <Create />}
                        </Route>
                        <Route path="/recipes/:id">
                            {!user && <Navigate to="/login" />}
                            {user && <Recipe />}
                        </Route>
                        <Route path="/search">
                            {!user && <Navigate to="/login" />}
                            {user && <Search />}
                        </Route>
                        <Route path="/login">
                            {user && <Navigate to="/" /> }
                            {!user && <Login /> }
                        </Route>
                        <Route path="/signup">
                            {user && user.displayName && <Navigate to="/" /> }
                            {!user && <Signup /> }
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        )}
    </div>
  );
}

export default App
