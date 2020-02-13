import React, {useContext} from 'react'
import {Context} from '../utils/Context'

function Section({border, label, color, changeColor}) {
    const {font} = useContext(Context)
    return (
        <button 
            className={`screen-${label}`}
            style={{backgroundColor: color, border: border ? 'solid black 2px' : 'none'}} 
            id={label} name='section' 
            onClick={event => changeColor(event)}
        >
            <p className={`screen-font ${font}`}>{label.charAt(0).toUpperCase() + label.slice(1)}</p>
        </button>
    )
}

export default Section