import React from 'react'
import {Routes, Route} from "react-router-dom";
import { useTheme } from './hooks/useTheme';


// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import ThemeSelector from './components/ThemeSelector';

// styles
import './App.css'

function App() {

  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App
