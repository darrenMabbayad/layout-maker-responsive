import {useState, useCallback} from 'react'

function useClientRect() {
    const [rect, setRect] = useState(null)

    const rectRef = useCallback(node => {
        if (node !== null) {
            setRect(node.getBoundingClientRect())
        }
    }, [])

    return [rect, rectRef]
}

export default useClientRect
