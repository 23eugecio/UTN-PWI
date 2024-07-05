

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


let usuario = login('usuario')

localStorage.setItem(
    'usuario', 
    JSON.stringify(usuario))

const usuarioRegistrado = JSON.parse(localStorage.getItem ("usuario"))

console.log(usuarioRegistrado.usuario)