import React, { useState } from 'react'


const Chats = () => {


return (
    <div className={`mensaje ${estado}`}>
    <div className='author'>{author}</div>
    <div className='content'>{content}</div>
    <div className='date'>{date}</div>
    </div>
)
}

export default Chats


{ author, content, date, estado }