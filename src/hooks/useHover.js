import {useState, useEffect, useRef} from 'react'

function useHover() {
    const [hovered, setHovered] = useState(false)
    const hoverRef = useRef(null)
    
    function enter(event) {
        const {name} = event.target
        if (name === 'anchor') {
            setHovered(true)
        }
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const node = hoverRef.current
        node.addEventListener("mouseenter", enter)
        node.addEventListener("mouseleave", leave)
        
        return () => {    
            node.removeEventListener("mouseenter", enter)
            node.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, hoverRef]
}

export default useHover