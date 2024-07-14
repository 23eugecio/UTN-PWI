import React from 'react'
import './Message.css/Message.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


const message = ({author, content, date, state}) => {
    const Message = message_list
    if (props.state === 'visto') {
        return <div class="message_received">
            <div class="header">{props.autor}</div> 
            <div class="content">{props.contenido}</div>
            <div class="date-footer">
                {props.fecha}</div>
                <span i class="bi bi-check-all" color='blue'></span></div>
    } else {
        return <div class="message_sent">
            <div class="header">{props.autor}</div> 
            <div class="content">{props.contenido}</div>
            <div class="date-footer">
                {props.fecha}</div>
                <span i class="bi bi-check-all" color='blue'></span></div>
    }
    <>

    </>
}


export default message