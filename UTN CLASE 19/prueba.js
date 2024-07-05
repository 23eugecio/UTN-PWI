/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1

*/

const contadorHTML = document.getElementById('contador')
const  btnIncrementarHTML = document.querySelector('.btn-incrementar')
const btndecrementarHTML = document.querySelector(".btn-decrementar")
const errorContadorHTML = document.querySelector(".error-contador")




const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}
const renderizarError = () =>{
    errorContadorHTML.innerText = textoError
}

const limpiarError = () =>{
    if(errorContadorHTML.innerText = textoError){
        renderizarError('')
    }
}

const handleIncrementarContador = () =>{
    estadoContador = estadoContador +1
    renderizarContador()
    limpiarError()
}

const handledecrementarContador = () =>{
    if(estadoContador > 1){
    estadoContador = estadoContador - 1
    renderizarContador()
    }
    else{
        renderizarContador('NO SE PUEDE DECREMENTAR A 0')
    }
}

    let estadoContador = 1
renderizarContador()


btnincrementarHTML.addEventListener("click", incrementarContador )
btndecrementarHTML.addEventListener("click", decrementarContador)



const formLoginHTML = document.getElementById('form-login')

console.dir(formLoginHTML.password.value)
console.dir(formLoginHTML.username.value)


const handleLogin = ( evento ) =>{
    /* Prevenimos que se recarge la pagina al enviarse el formulario */
    evento.preventDefault()
    console.log('formulario enviado')
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username.value)
}

formLoginHTML.addEventListener('submit', handleLogin)