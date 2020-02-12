import React from 'react'
import {createPortal} from 'react-dom'
import useHover from '../hooks/useHover'
import useClientRect from '../hooks/useClientRect'

function Tooltip({anchor, message}) {
    const [hovered, hoverRef] = useHover()   
    const [rect,  rectRef] = useClientRect()

    return (
        <div ref={rectRef}>
            <button className='tooltip-anchor' name='anchor' ref={hoverRef}>{anchor}</button>
            {
                hovered ? createPortal(
                    <div 
                        style={{
                            position: 'absolute', 
                            top: rect.bottom + 15,
                            left: rect.left - (150 - rect.width),
                            width: '150px'
                        }}
                        className='tooltip'
                    >
                        {message}
                    </div>, document.getElementById('modal-root')
                ) : null
            }
        </div>
    )
}

export default Tooltip
