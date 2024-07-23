import React, { useState } from 'react'
import ContenedorMensajes from './Components/ContenedorMensajes/ContenedorMensajes'
import './Components/Mensaje/Mensaje.css'
import './Components/ContenedorMensajes/ContenedorMensajes.css'
import data from './Data/data.js'
import ContactList from './Components/ContactList/ContactList.jsx'
import './Components/ContactList/ContactList.css'

const App = () => {

    const [contacto, setContacto] = useState({data})
    const [formMensajes, setFormMensajes] = useState({ content: '' })
    const handleInputChange = (event) => {
        setFormMensajes({ ...formMensajes, [event.target.name]: event.target.value })
    }
    return (

        <div>
        {/* <ContactList contacts={data}></ContactList> */}
        <ContenedorMensajes mensajes={data} />
        </div>
    )
}
export default App
