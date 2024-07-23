import React, { useState } from 'react'
import './ContenedorMensajes.css'
import MensajeComponente from '../Mensaje/Mensaje'

const { id_contacto: id } = useParams()

const [mensaje, setMensaje] = useState({})

const handleInputChange = (event) => {
    setMensaje({ ...formMensajes, [event.target.name]: event.target.value })}

    const [formMensajes, setFormMensajes] = useState({ content: '' })

    const [newMensaje, setNewMensaje] = useState(mensaje)
    const ContenedorMensajes = ({ mensajes }) => {
        const handleSubmit = (event, newMensajes) => {
            event.preventDefault()
            const newMensajes = {
                author: 'yo',
                content: mensaje,
                date: 'ayer a 15:37',
                estado: 'entregado',
                id: mensajes.length + 1
            }
            newMensajes([...mensajes, newMensajes])
        }

        return (
            <div className='pantalla-principal'>

                <div className='contenedor-mensajes'>
                    <div className='informacion-de-contacto'>
                        <img className='fondo' src="" alt='' />
                        <div className='foto-perfil' src="./assests/imagenes/pepe3.jpg" alt='' />
                        <div className='nombre-contacto'>Pepe</div>
                        <div className='iconos'>
                            <i className="bi bi-camera-video"></i>
                            <i className="bi bi-telephone"></i>
                            <i className="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                    <div className='mensajes'>
                        {(mensajes.map(({ author, content, date, estado }) => (
                            <ContactoComponente
                                key={id}
                                author={author}
                                content={content}
                                date={date}
                                status={estado}
                            />),
                        ))}
                        {(mensaje).map(({ id, author, text, estado, day }) => (
                            <MensajeComponente
                                key={id}
                                author={author}
                                content={text}
                                date={day}
                                status={estado}
                            />),
                        ))}
                    </div>
                    <div>
                        <formMensajes
                            handleSubmit={handleSubmit}
                            handleInputChange={handleInputChange}
                            newMensajes={newMensaje}
                        />
                    </div>
                    <div className='escribir-mensaje'>
                        <i className="bi bi-emoji-smile"></i>
                        <input
                            type='text'
                            placeholder="Mensaje"
                            value={mensaje}
                            onChange={handleInputChange}
                        />
                        <div className='iconos-abajo-der'>
                            <i className="bi bi-paperclip"></i>
                            <i className="bi bi-camera"></i>
                            <span className='send'><i className="bi bi-arrow-up-right-square"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    export default ContenedorMensajes