import React from 'react' 

import './CardColors.css'
import Color from '../Color/Color'

/**
 * Renders a card component with colors, time, and likes.
 *
 * @param {Object} props - The properties for the component.
 * @param {Array} props.colores - An array of colors.
 * @param {string} props.time - The time.
 * @param {number} props.likes - The number of likes.
 * @return {JSX.Element} The rendered card component.
 */
const CardColors = ({colores, time, likes}) => {
    return (
        <div className='colors-cards'>
            <div className='color'>
                <Color color={colores}/>
            </div>
            <div className="card-controls">
                <button className='btn-like'>
                    <i className='bi bi-heart'></i>
                    {likes}
                </button>
                <span className="time">
                    {time}
                </span>
            </div>
        </div>
    )
}



export default CardColors

/**
 * Logs a greeting message with the provided name.
 *
 * @param {Object} props - An object containing the name property.
 * @param {string} props.nombre - The name to be included in the greeting message.
 * @return {void} This function does not return anything.
 */
const miFuncion = ({nombre}) => {
    
    console.log('hola me llamo ' + nombre)
}