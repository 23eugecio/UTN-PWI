import React from 'react'
import './Contenedor/styles.css'
import './Contenedor/chats.jsx'
import '.Components/assets/whatsapp.png'


const Chats = ({data}) => {
    return (
        <div className='container'>
        <div className='chats'>
            {data.map(({ id, author, content, date, state}) => (
                <div className={`chat ${state === 'entregado' ? 'received' : 'sent'}`}>

                    <div className='chat_container'>
                        <div className='id'>{id}</div>
                        <div className='header'>{author}</div>
                        <div className='content'>{content}</div>
                        <div className='footer'>{date}; <span className={state === 'visto' ? 'blue' : 'grey'}></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}
export default Chats