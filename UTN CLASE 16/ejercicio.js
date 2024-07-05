/* 
Mejorar la funcion login para que el objeto retornado lo guarde en localStorage

*/
/* Guardar este objeto en localstorage */


const login = () => {
    const usuario = {
        email: null,
        password: null
    }
    
    usuario.email = email
    usuario.password = password
    alert(`Usuario ${usuario.email} registrado`)
    return usuario
}

let usuario = login('usuario')

localStorage.setItem('usuario', JSON.stringify(usuario))

const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"))

console.log(usuarioRegistrado.usuario)

