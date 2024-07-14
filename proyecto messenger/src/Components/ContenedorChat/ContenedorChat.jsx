import React from 'react'
import Chats from './ContenedorChat.jsx'
import '../global.css'
import  photouser from './assets/userpic.webp'


const ContenedorMensajes = ({ mensajes }) => {
    return (
        <div className='pantalla-principal'>
            <div className='informacion-de-contacto'>
                <img src={photouser} alt='usuario' className='foto-perfil'></img>
                <textarea className='nombre'>Pepe</textarea>
                <div className='iconos'>
                    <i class="bi bi-camera-video"></i>
                    <i class="bi bi-telephone"></i>
                    <i class="bi bi-three-dots-vertical"></i>
                    </div>
                </div>
            <div className='mensaje-en-bloque'>
                {ChatList.map(({author, content, fecha, estado,id})=>{
                    return(
                        <Chats
                            author={author}
                            content={content}
                            fecha={fecha}
                            estado={estado}
                            key={id}
                        />
                    )
                })
                }
            </div>
            <div className='icono-abajo'>
            <i class="bi bi-emoji-smile"></i>
            <input type="text" placeholder="Mensaje"/>
            <span className='iconos-abajo-der'>
            <i class="bi bi-paperclip"></i>
            <i class="bi bi-camera"></i>
            <i class="bi bi-mic-fill"></i>
            </span>
            </div>
        </div>
    )}


    export default ContenedorMensajes