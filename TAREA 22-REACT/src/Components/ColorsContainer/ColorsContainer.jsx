import React from 'react'
import './ColorsContainer.css'
import CardColor from '../CardColor.CardColor'


/**
 * Renders a container component for displaying a list of colors.
 *
 * @param {Object} props - The properties for the component.
 * @param {Array} props.cartas_colores - An array of color objects.
 * @param {string[]} color.color - The color value.
 * @param {number} color.likes - The number of likes.
 * @param {string} color.time - The time value.
 * @return {JSX.Element} The rendered container component.
 */

const ColorsContainer = ({cartas_colores/* array */}) => {

    return (
        <div className='ColorsCardsContainer'>
            {cartas_colores/* array */.map((carta_color) => {
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