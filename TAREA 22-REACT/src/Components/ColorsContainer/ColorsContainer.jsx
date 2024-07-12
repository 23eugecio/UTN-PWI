import React from 'react'
import  './ColorsContainer.css'
import CardColor from '../CardColor/CardColor'


const ColorsContainer = ({cartas_colores/* array */}) => {

    return (
        <div className='ColorsCardsContainer'>
            {cartas_colores.map((carta_color) => {
                console.log(carta_color)
                return (
                    <CardColor
                        key={carta_color.id}/* number */
                        Colores={carta_color.color}/* string */
                        likes={carta_color.likes}/* number */
                        time={carta_color.time}/* string */
                    />
                )
            })
        }
        </div>
    )
}

export default ColorsContainer