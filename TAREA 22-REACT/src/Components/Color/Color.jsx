import React from 'react';
import './Color.css'

const Color = (props) => {
    const colores = props.colores
    return (
    <div className="colors">
                {colores.map((color, index) => {
                    return (

                        <div className="color" style={{backgroundColor: color}} key={color + index} >
                            <span className='color-text'>{color}</span>{index}
                        </div>

                    )
                })
                }
    </div>
    )
}

export default Color