//FUNCIONES

//Declarar una funcion

/* function saludar(nombre, apellido){
    alert('Hola a ' + nombre + ' ' + apellido)
} 
saludar('Juan', 'Accqua')  */


//invocar mi funcion
/* saludar('pepe', 'suarez')
saludar('juan', 'maranga') */

//f(x) = 2x + 1
//f(x = 3) = 2 . 3 + 1 = 
//f(x = 4) = 2 . 4 + 1

/* 
Crear una funcion llamada sumar, que reciba dos numeros y muestre por consola el resultadod de la suma de ambos numeros
*/
/* function sumar(numero1, numero2) {
    let suma = numero1 + numero2
    console.log(suma)
} */

/* 
Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio

valor * 0.21


ej: calcularIva(100) => console: 21

*/
/* function calcularIva(importe){
    return importe * 0.21
}

let iva = calcularIva(100)

alert(iva)
console.log(iva)

alert(calcularIva(200)) 
 */

/* PARA NO REPETIR EL WHILE USAMOS LA FUNCTION Y ASI SE CUMPLE EL PRINCIPIO DRY(DON'T REPEAT YOURSELF) */

/* 
function SolicitarYValidarNumero (){
    let numero = prompt('Ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert("El dato debe ser un numero")
        numero = prompt("Ingrese el numero: ")
    }
    return Number(numero)
}

let edad = SolicitarYValidarNumero()
alert(edad)

let cantidadDeRepeticiones = SolicitarYValidarNumero()
let suma = 0 */

/* while (!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)) {
    alert("Dato no válido")
    cantidadDeRepeticiones = prompt("Ingrese un dato numérico: ")
} //NO ES NECESARIO YA QUE TENEMOS UNA FUCTION QUE SOLICITA Y VALIDA EL NUMERO*/

/* for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    let numero = SolicitarYValidarNumero()
    
    suma = suma + numero
}
alert("El resultado es: " + suma)  */

/* FINAL */

function SolicitarYValidarNumero (){
    let numero = prompt('Ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert("El dato debe ser un numero")
        numero = prompt("Ingrese el numero: ")
    }
    return Number(numero)
}


let cantidadDeRepeticiones = SolicitarYValidarNumero()
let suma = 0

for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    let numero = SolicitarYValidarNumero()
    suma = suma + numero
}
alert("El resultado es: " + suma) 