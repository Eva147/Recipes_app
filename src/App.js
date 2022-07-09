import React from 'react'
import { BrowserRouter, Switch, Router } from 'react-router-dom';

// page components
import Home from './pages/home/Home'
import Create from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

// styles
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Router exact path='/'>
            <Home />
          </Router>
          <Router path='/create'>
            <Create />
          </Router>
          <Router path='/search'>
            <Search />
          </Router>
          <Router path='/recipes/:id'>
            <Recipe />
          </Router>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
