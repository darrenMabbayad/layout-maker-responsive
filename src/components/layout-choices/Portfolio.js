import React from 'react'
import Section from '../Section'

function Portfolio({border, screen, color, changeColor}) {
    const sections = ['header', 'footer', 'main', 'section1', 'section2', 'box1']    
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

export default Portfolio
