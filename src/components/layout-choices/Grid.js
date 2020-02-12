import React from 'react'
import Section from '../Section'

function Grid({border, screen, color, changeColor}) {
    const sections = ['main', 'section1', 'section2', 'section3', 'box1', 'box2', 'box3', 'box4', 'box5']    
    return (
        <div className={`layout-${screen}`}>
            {
                sections.map(section => 
                    <Section 
                        border={border}
                        key={section} 
                        label={section} 
                        color={color[section]} 
                        changeColor={changeColor}
                    />
                )
            }
        </div>
    )
}

export default Grid
