import React from 'react'
import PropTypes from 'prop-types'
import './mensaje.css'
import '../global.css'

const Mensajes = ({ author, content, date, status }) => {
    const mensajeClass = author === 'yo' ? 'mensaje-derecha' : 'mensaje-izquierda';
    return (
        <div className={`mensaje ${mensajeClass}`}>
            <div className='author'>
                {author}
            </div>
            <div className='content'>
                {content}
            </div>
            <div className='date-status'>
                {date} <span className={status === 'visto' ? 'status-visto' : ''}>{status}</span>
            </div>
        </div>
    );
}

Mensajes.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

Mensajes.defaultProps = {
    status: 'sent'
};

export default Mensajes;