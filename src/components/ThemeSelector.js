import React from 'react'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode_icon.svg'
// styles
import './ThemeSelector.css'


export default function ThemeSelector() {
    const {mode, changeMode} = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img className='svg-theme'
                    onClick={toggleMode}
                    src={modeIcon} 
                    alt='light/dark theme icon'
                    style={{filter: mode === 'light' ? 'invert(20%)' : 'invert(70%'}}
                />
            </div>
        </div>
    )
}