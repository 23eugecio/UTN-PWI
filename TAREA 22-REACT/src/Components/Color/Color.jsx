import React from 'react'
import './Color.css'

const Color = (props) => {
    const colores/*array string*/ = props.colors
    return (
        <div className="Color">
                {colores.map((color/* string */, likes /* number */, index /* number */) => {
                    return (


                            <div className="color" style={{background: color}} key={color + index}>
                                <span className='bi bi-heart'></span>{index}
                            </div>
                    )
                })
                }
                </div>
    )
}

export default Color