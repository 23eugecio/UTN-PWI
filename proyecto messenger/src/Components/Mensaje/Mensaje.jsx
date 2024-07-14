import React from 'react'
import photouser from '../assets/userpic.webp'
import './mensaje.css'
import '../global.css'



const Mensajes = ({author, content, fecha, estado,id}) => {

    return (
        <div className='contenedor-chat'>
            <div className='informacion-contacto'>
                <img src={photouser} alt='usuario' className='fotos-perfil'></img>
                <textarea className='nombre'>{author}</textarea>yo
                <div className='iconos'>
                    <i class="bi bi-camera-video"></i>
                    <i class="bi bi-telephone"></i>
                    <i class="bi bi-three-dots-vertical"></i>
                </div>
            </div>
            <div className='mensaje-en-bloque'>
                <p className='autor'>{author}</p>
                <p className='mensaje'>{content}</p>
                <p className='fecha'>{fecha}</p>
                <p className='estado'>{estado}</p>
            </div>
            <div className='enviar-mensaje'>
                <i class="bi bi-emoji-smile"></i>
                <input type="text" placeholder='Mensaje' />
                <i class="bi bi-paperclip"></i>
                <i class="bi bi-mic-fill"></i>
                <i class="bi bi-send"></i>
            </div>
        </div>
    )
}

export default Mensajes