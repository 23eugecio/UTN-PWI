import React, { useState } from 'react';
import 'src/components/ContactList.jsx';
import ContactItem from './ContactItem';
import './ContactList.css';



const ContactList = ({ contacts, onSelectContact }) => {
    return (
        <div className="contact-list">
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onSelectContact={onSelectContact}
                    onEditContact={onSelectContact}
                />
            ))}
        </div>
    );
};

export default ContactList;

