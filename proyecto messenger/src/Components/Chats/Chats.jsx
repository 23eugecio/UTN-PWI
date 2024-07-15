import React from 'react'
import '../global.css'


const Chats = ({ author, content, fecha, estado }) => {
return (
    <div className={`mensaje ${estado}`}>
    <div className='author'>{author}</div>
    <div className='content'>{content}</div>
    <div className='fecha'>{fecha}</div>
    </div>
)
}
export default Chats