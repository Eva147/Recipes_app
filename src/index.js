import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from './context/ThemeContext'
import {AuthContextProvider} from "./context/AuthContext";

createRoot(document.getElementById('root')
).render(
    <React.StrictMode>
        <AuthContextProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </AuthContextProvider>
    </React.StrictMode>,
)
