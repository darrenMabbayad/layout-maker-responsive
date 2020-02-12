import React, {useContext} from 'react'
import {Context} from '../../utils/Context'
import basic from '../../svg/Basic.svg'
import blog from '../../svg/Blog.svg'
import portfolio from '../../svg/Portfolio.svg'
import grid from '../../svg/Grid.svg'
import ecommerce from '../../svg/ECommerce.svg'

function Selector() {
    const {layoutToRender, changeScreen} = useContext(Context)

    return (
        <div>
            {
                layoutToRender === 'lg' || layoutToRender === 'xl' ? 
                    <div className='selector-non-mobile'>
                        <div className='button-row'>
                            <button className='layout-btn'name='basic' onClick={event => changeScreen(event)}>
                                <img src={basic} alt=''></img> 
                                <p>Basic</p>
                            </button>
                            <button className='layout-btn'name='blog' onClick={event => changeScreen(event)}>
                                <img src={blog} alt=''></img> 
                                <p>Blog</p>
                            </button>
                        </div>
                        <div className='button-row'>
                            <button className='layout-btn'name='grid' onClick={event => changeScreen(event)}>
                                <img src={grid} alt=''></img> 
                                <p>Grid</p>
                            </button>
                            <button className='layout-btn'name='portfolio' onClick={event => changeScreen(event)}>
                                <img src={portfolio} alt=''></img> 
                                <p>Portfolio</p>
                            </button>
                        </div>
                        <div className='button-row'>
                            <button className='layout-btn'name='ecommerce' onClick={event => changeScreen(event)}>
                                <img src={ecommerce} alt=''></img> 
                                <p>E-commerce</p>
                            </button>
                        </div>
                    </div> :
                    <div className='selector-mobile'>
                        <button className='layout-btn-mobile' name='basic' onClick={event => changeScreen(event)}>
                            <img src={basic} alt=''></img> 
                            <p>Basic</p>
                        </button>
                        <button className='layout-btn-mobile'name='blog' onClick={event => changeScreen(event)}>
                            <img src={blog} alt=''></img> 
                            <p>Blog</p>
                        </button>
                        <button className='layout-btn-mobile'name='ecommerce' onClick={event => changeScreen(event)}>
                            <img src={ecommerce} alt=''></img> 
                            <p>E-commerce</p>
                        </button>
                        <button className='layout-btn-mobile'name='portfolio' onClick={event => changeScreen(event)}>
                            <img src={portfolio} alt=''></img> 
                            <p>Portfolio</p>
                        </button>
                        <button className='layout-btn-mobile'name='grid' onClick={event => changeScreen(event)}>
                            <img src={grid} alt=''></img> 
                            <p>Grid</p>
                        </button>
                    </div>
            }
        </div>
    )
}

export default Selector
