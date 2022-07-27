import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
    const contex = useContext(ThemeContext)
    return contex
}