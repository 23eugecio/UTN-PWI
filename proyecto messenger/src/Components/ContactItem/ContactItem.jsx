import React, { useState } from 'react'
import './ContactItem.css'
import './Components/ContactList/ContactList.jsx'
const ContactItem = () => {
    return (
        <div className="contact-item">

            <div className="contact-info">
                <div className="contact-name">Pepe</div>
                <div className="contact-status">Online</div>    
            </div>
            
            <div className="contact-actions">
                <i className="bi bi-camera-video"></i>
                <i className="bi bi-telephone"></i>
                <i className="bi bi-three-dots-vertical"></i>
            </div>
            
        </div>
    )
}

export default ContactItem
