import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const parametros = useParams()

const FormularioMensaje = ({ formMensaje, setFormMensaje, handleSubmit }) => {
    const {name, numero, estado, thumbnail, id, mensajes} = obtenerDatosPorId(parametros.id);
    
    const [formMensajes, setFormMensajes] = useState({ content: '' })
    
    const handleChangeFormValue = (e) => {
        const { name, value } = e.target
        setFormMensaje({ ...formMensaje, [name]: value })
    }

    return (
        <form className="escribir-mensaje" onSubmit={handleSubmit}>
            <div className='contenedor-input'>
                <button className='btn-adjuntar' type='button'>
                    <i className="bi bi-paperclip"></i>
                </button>
                <input type='text' name="contenido" id="input-mensaje" onChange={handleChangeFormValue} value={formMensaje.contenido} placeholder='Escribi tu mensaje'></input>
                <i className="bi bi-emoji-smile icono-emoji"></i>
            </div>
            {formMensaje.contenido.length > 0 && (
                <button className='boton-enviar' type='submit'>
                    <i className="bi bi-send-fill icono-enviar"></i>
                </button>
            )}
        </form>
    )
}

export default FormularioMensaje