import React, {useContext} from 'react'
import {createPortal} from 'react-dom'
import {Context} from '../utils/Context'
import useToggle from '../hooks/useToggle'
import ToolTip from './Tooltip'
import burger from '../svg/burger.svg'

function Header() {
    const {layoutToRender} = useContext(Context)
    const {nav, tooltipOne, tooltipTwo, tooltipThree, toggle} = useToggle()

    const generalStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '8vh'
    }
    const mobileStyles = {
        position: 'absolute',
        top: '8vh',
        width: '25vw',
        height: '92vh',
    }
    
    const nonMobileStyles = {
        width: '40%', 
    }

    const tooltipAnchors = {
        one: 'Filling Colors',
        two: 'Picking Fonts',
        three: 'Choosing Layouts'
    }

    const tooltipMessages = {
        one: 'Select a color then click the fill button. Then click the section you want to change.',
        two: 'Select one of the three fonts and all the text will update to that font.',
        three: 'Select one of the five layouts that most interests you.'
    }

    return (
        <header> 
            {
                layoutToRender === 'xs' || layoutToRender === 'sm' || layoutToRender === 'md' ? 
                    <>
                        <nav style={generalStyles}>
                            <button 
                                className='burger' 
                                name='hamburger-btn' 
                                onClick={event => toggle(event)}
                            >
                                <img className='burger-icon' src={burger} alt='burger'></img>
                            </button>
                            <h1 className='logo'>layoutColors.io</h1>
                        </nav>
                        {
                            nav ? createPortal(
                                <div>
                                    <button className='overlay' name='hamburger-btn' onClick={event => toggle(event)}></button>
                                    <div style={mobileStyles}>
                                        <ul className='mobile-menu'>
                                            <li>
                                                <button 
                                                    className='tooltip-anchor mobile-anchor first' 
                                                    id='anchor-one' 
                                                    name='mobile-menu-btn' 
                                                    onClick={event => toggle(event)}
                                                > 
                                                    Choosing Fonts
                                                </button>
                                                {tooltipOne ? <div className='mobile-tooltip'>{tooltipMessages.one}</div> : null}
                                            </li>
                                            <li>
                                                <button 
                                                    className='tooltip-anchor mobile-anchor' 
                                                    id='anchor-two' 
                                                    name='mobile-menu-btn' 
                                                    onClick={event => toggle(event)}
                                                > 
                                                    Filling in Colors
                                                </button>
                                                {tooltipTwo ? <div className='mobile-tooltip'>{tooltipMessages.two}</div> : null}
                                            </li>
                                            <li>
                                                <button 
                                                    className='tooltip-anchor mobile-anchor' 
                                                    id='anchor-three' 
                                                    name='mobile-menu-btn' 
                                                    onClick={event => toggle(event)}
                                                > 
                                                    Picking a Layout
                                                </button>
                                                {tooltipThree ? <div className='mobile-tooltip'>{tooltipMessages.three}</div> : null}
                                            </li>
                                        </ul>
                                    </div>
                                </div>, document.getElementById('modal-root') 
                            ) : null
                        }
                    </> :
                    <nav style={generalStyles}>
                        <h1 className='logo'>layoutColors.io</h1>
                        <ul style={{...generalStyles, ...nonMobileStyles}}>
                            <li><ToolTip anchor={tooltipAnchors.one} message={tooltipMessages.one}/></li>
                            <li><ToolTip anchor={tooltipAnchors.two} message={tooltipMessages.two}/></li>
                            <li><ToolTip anchor={tooltipAnchors.three} message={tooltipMessages.three}/></li>
                        </ul>
                    </nav>               
            }
        </header>
    )
}

export default Header