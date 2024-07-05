const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}



const solicitarDato = (objetoDeConfeccion) => {

    let dato = prompt(objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato = prompt(objetoDeConfeccion.error)
    }
    return dato
}

const DATOS = {
    EMAIL: {
        mensaje: 'Ingrese un email, por favor.',
        error: 'Error email invalido: ingrese nuevamente el email',
        validacion: validacionEmail
},
    PASSWORD:{
        mensaje: 'Ingrese una password',
        error: 'Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula',
        validacion: validacionPassword
    } 

}




const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(DATOS.EMAIL)
    usuario.password = solicitarDato(DATOS.PASSWORD)

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}



/* let usuario = login('usuario')

localStorage.setItem('usuario', JSON.stringify(usuario))

const usuarioRegistrado = JSON.parse(localStorage.getItem ("usuario"))
 */

const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+', '-']
    for(let operacionDisponible of OPERACIONES_DISPONIBLES){
        if(operacionDisponible === operacion){
            return true
        }
    }
    return false
}

const validacionNumero = (numero) =>{
    return numero && !isNaN(numero)
}



const calculadora = () =>{
    let operacion = prompt('Ingrese una operacion')
    while(!validacionOperacion(operacion)){
        operacion = prompt('Error, operacion no disponible, seleccione una operacion')
    }

    let a = prompt("Ingrese un primer numero")
    while(!validacionNumero(a)){
        a = prompt("Error numero no valido, ingrese nuevamente")
    }

    let b = prompt('Ingrese un segundo numero')
    while(!validacionNumero(b)){
        b = prompt('Error numero no valido, ingrese nuevamente')
    }

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a) + Number(b)
    }
    else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }

    alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)
}


if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}

const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))

const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}

const renderizarHistorial = () =>{
    let listaHistorial = ''
    const historial = obtenerHistorial()
    for (const objeto of listaHistorial){
    listaHistorial = listaHistorial + `
    accion: ${objeto.accion}
    operacion: ${objeto.operacion}
    numeros: ${objeto.a}, ${objeto.b}
    resultado: ${objeto.resultado}
    fecha: ${objeto.fecha}
    `
    }
return listaHistorial
}
alert(renderizarHistorial())
