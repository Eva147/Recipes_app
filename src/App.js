import React from 'react'
import {Routes, Route} from "react-router-dom";

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

// styles
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App
