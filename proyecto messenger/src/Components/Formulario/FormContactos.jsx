import React from 'react'
import contacto from '../../Data/data.js'

const handleChangeFormValue = (e) => {
    const { name, value } = e.target
const FormContactos = ({formContactos}) => {
    return (    
        <div>
            <form>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Escriba su nombre" />     
            </form>

            <form>
                <label htmlFor="numero">Numero</label>
                <input type="text" id="numero" placeholder="Escriba su numero" />     
            </form>     

            <form>
                <label htmlFor="estado">Estado</label>  
                <select name="estado" id="estado">
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
            </form>
            
        </div>
    )
}  
} 