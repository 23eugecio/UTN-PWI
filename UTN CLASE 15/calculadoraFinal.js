const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}


const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    let email = prompt('Ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('Error email invalido: ingrese nuevamente el email')
    }
    usuario.email = email

    let password = prompt('Ingrese la password que tenga mas de 6 caracteres y una mayuscula')
    while(!validacionPassword(password)){
        password = prompt('Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula')
    }
    usuario.password = password

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}


const validarOperaciones = (operacion) => {
    const OPERACIONES_DISPONIBLES =['+', '-']
    for(let operacionesDisponible of OPERACIONES_DISPONIBLES){
        if(operacionesDisponible === operacion){
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
    while(!validarOperaciones(operacion)){
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


console.log(calculadora())