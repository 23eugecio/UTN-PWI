import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../global.css'
import './ContenedorMensajes.css'

import Chats from '../Chats/Chats'

const ContenedorMensajes = ({ mensajes }) => {
    const [mensaje, setMensaje] = useState('')

    const handleInputChange = (event) => {
        setMensaje(event.target.value)
    }

    return (
        <div className='pantalla-principal'>
            <div className='contenedor-mensajes'>
                <img className='fondo' src="./whatsappblack.png" alt=''/>
            <div className='informacion-de-contacto'>
                <img cllassName='foto-perfil' src="./images.png" alt=''/>
                <div className='nombre-contacto'>Pepe</div>
                <div className='iconos'>
                    <i className="bi bi-camera-video"></i>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-three-dots-vertical"></i>
                </div>
            </div>
    </div>
            <div className='mensajes-en-bloque'>
                {mensajes.map(({ author, content, fecha, estado, id }) => (
                    <Chats
                        key={id}
                        author={author}
                        content={content}
                        fecha={fecha}
                        estado={estado}
                    />
                ))}
            </div>
            <div className='escribir-mensaje'>
                <i className="bi bi-emoji-smile"></i>
                <input
                    type="text"
                    placeholder="Mensaje"
                    value={mensaje}
                    onChange={handleInputChange}
                />
                <div className='iconos-abajo-der'>
                    <i className="bi bi-paperclip"></i>
                    <i className="bi bi-camera"></i>
                    <i className="bi bi-mic-fill"></i>
                </div>
            </div>
        </div>
    );
};

ContenedorMensajes.propTypes = {
    mensajes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            fecha: PropTypes.string.isRequired,
            estado: PropTypes.oneOf(['visto', 'entregado', 'no entregado']).isRequired
        })
    ).isRequired
};

export default ContenedorMensajes