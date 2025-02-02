import React from 'react'

import './App.jsx'

function App() {

/*   const userData = {
    isLogged: true,
    isAdmin: true,
    lang: 'en'
  }
  {
    condicion
    ? <h2>Se cumplio</h2>
    : <h3>No se cumplio</h3>
  }
  
  {
    condicion && <h2>Se cumple la condicion</h2>
  }
  {
    estaRegistrado && <h2>Logueado</h2>
  }

}
 */


/*
Van a crear un componente llamado Navbar y van a pasarle por props el objeto userData
Si isLogged es false entonces mostraran un button que diga 'login'
Si isAdmin es true mostraran un <button></button> que diga 'crear producto'
OPCIONAL:
Si lang esta en 'en' todos los textos deben ser en ingles
Si lang esta en 'es' todos los textos deben ser en español
*/


const NavBar = (props) => {
    const isLogged = props.userData.isLogged
    const isAdmin = props.userData.isAdmin
    const lang = props.userData.lang
    const data ={
        en: {
            loguear: 'LogIn',
            create: 'Create Product',
        },
        es: {
            loguear: 'Registrarse',
            create: 'Crear Producto'
        }
    }
    const dataSelected = data[lang]
    return (
        <div>
            <span>Logo</span>
            <span>HOME</span>
            {
                !isLogged && <button>{dataSelected.loguear}</button>
            }
            {
                isAdmin && <button>{dataSelected.create}</button>
            }
        </div>
    )
}
}
export default NavBar














