import React from 'react'
import Section from '../Section'

function ECommerce({border, screen, color, changeColor}) {
    const sections = ['header', 'sidebar', 'section1', 'section2', 'section3', 'section4', 'section5','box1', 'box2', 'box3', 'box4', 'box5']    
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

export default ECommerce
