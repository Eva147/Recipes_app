import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {ThemeProvider} from './context/ThemeContext'

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />Ÿ
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
