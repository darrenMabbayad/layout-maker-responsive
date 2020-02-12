import React, {useState, useContext} from 'react'
import {Context} from '../../utils/Context'
import Basic from '../layout-choices/Basic'
import Blog from '../layout-choices/Blog'
import ECommerce from '../layout-choices/ECommerce'
import Portfolio from '../layout-choices/Portfolio'
import Grid from '../layout-choices/Grid'

function Screen({border, fill}) {
    const {layoutToRender, pickerColor, screen} = useContext(Context)    
    const defaultColors = {
        blue: '#0098bd',
        darkblue: '#404748',
        grey: '#a9a9a9',
        lightgrey: '#bebebe',
        orange: '#e07a5f'
    }
    const [color, setColor] = useState({
        header: defaultColors.blue,
        footer: defaultColors.darkblue,
        main: defaultColors.orange,
        sidebar: defaultColors.grey,
        section1: defaultColors.grey,
        section2: defaultColors.lightgrey,
        section3: defaultColors.darkblue,
        section4: defaultColors.blue,
        section5: defaultColors.orange,
        box1: defaultColors.grey,
        box2: defaultColors.lightgrey,
        box3: defaultColors.darkblue,
        box4: defaultColors.blue,
        box5: defaultColors.orange
    })

    function changeColor(event) {
        const {name, id} = event.target
        if (name === 'section') {
            if (fill) {
                setColor({...color, [id]: pickerColor})
            } else return console.log(`Fill not toggled, ${fill}`)
        }
        else return console.log(`Section was not found: ${name}`)
    }

    function displayLayout() {
        if (screen === 'basic') {
            return <Basic border={border} screen={screen} color={color} changeColor={changeColor}/>
        } else if (screen === 'blog') {
            return <Blog border={border} screen={screen} color={color} changeColor={changeColor}/>
        } else if (screen === 'ecommerce') {
            return <ECommerce border={border} screen={screen} color={color} changeColor={changeColor}/>  
        } else if (screen === 'portfolio') {
            return <Portfolio border={border} screen={screen} color={color} changeColor={changeColor}/>
        } else if (screen === 'grid') {
            return <Grid border={border} screen={screen} color={color} changeColor={changeColor}/> 
        } else return console.log(`Layout not found: ${screen}`)
    }

    return (
        <div className={layoutToRender === 'lg' || layoutToRender === 'xl' ? 'screen-non-mobile': 'screen-mobile'}>
            {displayLayout()}
        </div>
    )
}

export default Screen
