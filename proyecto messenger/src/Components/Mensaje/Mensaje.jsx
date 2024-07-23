import React, { useState } from 'react';

import './Mensaje.css';


const Mensaje = ({ author, content, date, status }) => {
    const MensajeClase = author === 'yo';
    const mensaje  = MensajeClase ? 'yo' : 'otro';
    return (
        <div className={`mensaje ${MensajeClase ? 'yo' : 'otro'}`}>
            <div className='contenido-mensaje'>
                <p className='author'>{author}</p>
                <p>{content}</p>
                <span className='fecha-estado'>{date}</span>
                <p className={status === 'visto' ? 'estado-visto' : ''}>{status}</p>
                <span className='visto'><i className="bi bi-check2-all"></i></span>
            </div>
        </div>
    );
};

const [mensaje, setMensajes] = useState()
const [formMensajes, setFormMensajes] = useState({ content: '' })
const handleInputChange = (event) => {
    setFormMensajes(event.target.value)
} 
const handleSubmit = (event) => {
    event.preventDefault()
   
    const newMensajes = {
        author: 'yo',
        content: mensaje,
        date: 'ayer a 15:37',
        estado: 'entregado',
        id: mensaje.length + 1
    }
    setMensajes([...mensaje, newMensajes])
}

export default Mensaje