import React from 'react'
import Section from '../Section'

function Blog({border, screen, color, changeColor}) {
    const sections = ['header', 'footer', 'main', 'sidebar', 'section1', 'section2', 'box1', 'box2']    
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

export default Blog
