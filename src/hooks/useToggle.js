import {useState} from 'react'

function useToggle() {
    const [border, toggleBorder] = useState(false)
    const [fill, toggleFill] = useState(false)
    const [nav, toggleNav] = useState(false)
    const [tooltipOne, toggleTooltipOne] = useState(false)
    const [tooltipTwo, toggleTooltipTwo] = useState(false)
    const [tooltipThree, toggleTooltipThree] = useState(false)

    function toggle(event) {
        const {name, id} = event.target
        if (name === 'fill-btn') {
            toggleFill(prev => !prev)
        }
        else if (name === 'border-btn') {
            toggleBorder(prev => !prev)
        }
        else if (name === 'hamburger-btn') {
            toggleNav(prev => !prev)
        }
        else if (name === 'mobile-menu-btn') {
            if (id === 'anchor-one') {
                toggleTooltipOne(prev => !prev)
            }
            if (id === 'anchor-two') {
                toggleTooltipTwo(prev => !prev)
            }
            if (id === 'anchor-three') {
                toggleTooltipThree(prev => !prev)
            }
        }
    }
    
    return {border, fill, nav, tooltipOne, tooltipTwo, tooltipThree, toggle}
}

export default useToggle
