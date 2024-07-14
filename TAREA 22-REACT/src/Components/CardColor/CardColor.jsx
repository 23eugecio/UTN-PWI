import React from 'react' 
import './CardColor.css'
import Color from '../Color/Color'


const CardColor  = ({colores, time, likes}) => {

    return (
        <div className='color-card'>
            <div className='color'>
                <Color colores={colores}/>
            </div>
            <div className="card-controls">
                <button className='btn-like'></button>
                    <span className='like'>
                        <i className='bi bi-heart'></i>
                        </span>
                    {likes}
                <span className="time">
                    {time}
                </span>
            </div>
        </div>
    )
}

export default CardColor

/*
 * Logs a greeting message with the provided name.
 *
 * @param {Object} props - An object containing the name property.
 * @param {string} props.nombre - The name to be included in the greeting message.
 * @return {void} This function does not return anything.
 */
/* const miFuncion = ({nombre}) => {
    
    console.log('hola me llamo ' + nombre)
} */