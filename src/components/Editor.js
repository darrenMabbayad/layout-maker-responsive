import React, {useContext} from 'react'
import Tools from './editor-components/Tools'
import Screen from './editor-components/Screen'
import Selector from './editor-components/Selector'
import {Context} from '../utils/Context'
import useToggle from '../hooks/useToggle'

function Editor() {
    const {layoutToRender} = useContext(Context)
    const {border, fill, toggle} = useToggle()
    const nonMobileStyles = {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: '80vh'  
    }
    const mobileStyles = {
        display: 'flex',
        justifyContent: 'space-around', 
        alignItems: 'center',
        flexDirection: 'column',
        height: '80vh' 
    }

    return (
        <div>
            { 
                layoutToRender === 'lg' || layoutToRender === 'xl' ?
                    <div style={layoutToRender === 'lg' || layoutToRender === 'xl' ? nonMobileStyles : mobileStyles}>
                        <Tools fill={fill} border={border} toggle={toggle}/>
                        <Screen border={border} fill={fill}/>
                        <Selector /> 
                    </div> :
                    <div style={layoutToRender === 'lg' || layoutToRender === 'xl' ? nonMobileStyles : mobileStyles}>
                        <Selector /> 
                        <Screen border={border} fill={fill}/>
                        <Tools fill={fill} border={border} toggle={toggle}/>
                    </div>
            }
        </div>
    )
}

export default Editor
