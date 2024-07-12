import React from 'react';
import './Color.css'

const Color = (props) => {
const colores = props.colors
    return (
    <div className="colors">
                {colores.map((color, index) => {
                    console.log(color)
                    return (

                        <div className="color" style={{backgroundColor: color}} key={color + index} >
                            <span className='bi bi-heart'></span>{index}
                        </div>

                    )
                })
                }
    </div>
    )
}

export default Color