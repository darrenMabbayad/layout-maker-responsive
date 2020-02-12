import React, {createContext, useState, useEffect} from 'react'
const Context = createContext()

function ContextProvider({children}) {
    /*---------- Logic For Determining Layout ----------*/
    const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth)
    const breakpoints = {
        xs: 400,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    }

    // determine the width of the viewport and determine the layout to render
    useEffect(() => {
        const handleResize = () => {
            setViewPortWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {window.removeEventListener('resize', handleResize)}
    }, [])

    const layoutToRender = viewPortWidth < breakpoints.xs ? 'xs' :
                           viewPortWidth < breakpoints.sm ? 'sm' :
                           viewPortWidth < breakpoints.md ? 'md' :
                           viewPortWidth < breakpoints.lg ? 'lg' : 'xl'

    /*---------- Logic For Determining Color ----------*/
    const [pickerColor, setPickerColor] = useState('')

    function handlePickerColor(pickerColor) {
        setPickerColor(pickerColor.hex)
    }

    /*---------- Logic For Determining Screen Layout ----------*/
    const [screen, setScreen] = useState('basic')

    function changeScreen(event) {
        const {name} = event.target
        setScreen(name)
    }

    /*---------- Logic For Determining Text Font ----------*/
    const [font, setFont] = useState('ubuntu')

    function changeFont(event) {
        const {id} = event.target
        setFont(id)
    }

    return (
        <Context.Provider
            value={{
                layoutToRender, pickerColor, handlePickerColor, screen, changeScreen, font, changeFont
            }}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
