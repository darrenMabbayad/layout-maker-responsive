import React, {useContext} from 'react'
import {HuePicker, SketchPicker} from 'react-color'
import {Context} from '../../utils/Context'

function Tools({fill, border, toggle}) {
    const {layoutToRender, pickerColor, handlePickerColor, changeFont} = useContext(Context)
    const orange = '#e07a5f'
    const grey = '#a9a9a9'

    return (
        <div>
            {
                layoutToRender === 'lg' || layoutToRender === 'xl' ? 
                    <div className='tools-non-mobile'>
                        <SketchPicker width={200} color={pickerColor} onChange={handlePickerColor} disableAlpha={true}/>
                        <div className='tools-non-mobile-btns'>
                            <button 
                                className='font-btn ubuntu' 
                                name='font-btn' 
                                id='ubuntu' 
                                onClick={event => changeFont(event)}>Ubuntu</button>
                            <button 
                                className='font-btn roboto' 
                                name='font-btn' 
                                id='roboto' 
                                onClick={event => changeFont(event)}>Roboto</button>
                            <button 
                                className='font-btn montserrat' 
                                name='font-btn' 
                                id='montserrat' 
                                onClick={event => changeFont(event)}>Montserrat</button>
                            <button 
                                style={{
                                    border: border ? `solid ${orange} 2px` : `solid ${grey} 2px`,
                                    color: border ? orange : grey
                                }}
                                className='border-btn' 
                                name='border-btn' 
                                onClick={event => toggle(event)}>{border ? 'Borders On' : 'Borders Off'}</button>
                            <button 
                                style={{
                                    border: fill ? `solid ${orange} 2px` : `solid ${grey} 2px`,
                                    color: fill ? orange : grey
                                }}
                                className='fill-btn' 
                                name='fill-btn' 
                                onClick={event => toggle(event)}>Fill</button>
                        </div>
                    </div> :
                    <div className='tools-mobile'>
                        <div className='huepicker'>
                            <HuePicker 
                                
                                width={
                                        layoutToRender === 'md' ? 490 :
                                        layoutToRender === 'sm' ? 300 : 
                                        layoutToRender === 'xs' ? 250 : 300
                                } 
                                color={pickerColor} 
                                onChange={handlePickerColor}
                            />
                        </div>
                        <div className='tools-mobile-btns'>
                            <button 
                                style={{
                                    border: border ? `solid ${orange} 2px` : `solid ${grey} 2px`,
                                    color: border ? orange : grey
                                }}
                                className='border-btn' 
                                name='border-btn' 
                                onClick={event => toggle(event)}>{border ? 'Borders On' : 'Borders Off'}</button>
                            <button 
                                style={{
                                    border: fill ? `solid ${orange} 2px` : `solid ${grey} 2px`,
                                    color: fill ? orange : grey
                                }}
                                className='fill-btn' 
                                name='fill-btn' 
                                onClick={event => toggle(event)}>Fill</button>
                            <button 
                                className='font-btn ubuntu' 
                                name='font-btn' 
                                id='ubuntu' 
                                onClick={event => changeFont(event)}>Ubuntu</button>
                            <button 
                                className='font-btn roboto' 
                                name='font-btn' 
                                id='roboto' 
                                onClick={event => changeFont(event)}>Roboto</button>
                            <button 
                                className='font-btn montserrat' 
                                name='font-btn' 
                                id='montserrat' 
                                onClick={event => changeFont(event)}>Montserrat</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Tools
