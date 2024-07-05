

/* 1//
Crear una funcion que dado 3 valores nos devuelva la sumatoria
calcularSumatoria(1,2,3) => 6

function calcularSumatoria (a, b, c){
    let sumatoria = a, b, c
    return sumatoria
    }

function sumar(a, b){
    a = Number(a)
    b = Number(b)
    return a + b
}


//VERSION MEJORADA Y ESTETICA!!

function Sumatoria(a,b,c){
    return a+b+c
}

2//
Crear una funcion que reciba 2 numeros y siempre devuelva el mayor
mayor(7,2) 7

function mayor (a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}

3//
crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'
generarEmail('pepe') => 'pepe@gmail.com'

function generarGmail(nombreDeUsuario){
return String(nombreDeUsuario +'@gmail.com')
}
console.log(GenerarEmail('eugeciotti'))  

//VERSION MEJORADA Y ESTETICA!!
function generarEmail(nombreDeUsuario){
    return nombreDeUsuario + '@gmail.com'
}




/* 
CONVERTIR ESTAS FUNCIONES EN ARROW FUNCTIONS


function mayor(a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}
function generarMail(nombreDeUsuario){
    return String(nombreDeUsuario + '@gmail.com')
}
function sumar(a, b){
    a = Number(a)
    b = Number(b)
    return a + b + undefined
}
*/

/* const calcularSumatoria = (a, b, c) => {
    return a + b + c
}
 */

const calcularSumatoria = (a, b, c) => a + b + c  /* cuando no hay llaves, retorna por default  */

console.log(calcularSumatoria(1, 2, 3))



/* const obtenerMayor =   (a , b)=>{
    if (a > b){
        return a
    } else{ (a < b)
        return b
    }
} 

const generarEmail = (usuario) => usuario+'@gmail.com' */

// Function para verificar si tiene mayuscula el string
const estaEnMinuscula = (str) => str == str.toLowerCase()
const tieneMayuscula = (str) => !estaEnMinuscula(str)
