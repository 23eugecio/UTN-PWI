


/* 
vamos a solicitar al usuario una cantidadDeRepeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario, al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
validar que el numero ingresado sea un numero, en caso de que no volver a solicitarlo
validar que la cantidadDeRepeticiones ingresada sea un numero, en caso de que no volver a solicitarlo

 */

/* let cantidadDeRepeticiones = prompt("Cuántas números sumamos?: ")
let suma = 0
while (!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)) {
    alert("Dato no válido")
    cantidadDeRepeticiones = prompt("Ingrese un dato numérico: ")
}
for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    numero = prompt("Ingrese un número: ")
    while (!numero || isNaN(numero)) {
        alert("Dato no válido")
        numero = prompt("Ingrese un dato numérico")
    }
    suma = suma + Number(numero)
}
alert("El resultado es: " + suma) */

//FUNCIONES

//Declarar una funcion
/* function saludar(nombre, apellido){
    alert('Hola a ' + nombre + ' ' + apellido)
} */


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

alert(calcularIva(200)) */


function solicitarYValidarNumero (){
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert("El dato debe ser un numero")
        numero = prompt("Ingrese el numero: ")
    }
    return Number(numero)
}



let cantidadDeRepeticiones = solicitarYValidarNumero()
let suma = 0

for (let iteracion = 1; iteracion <= cantidadDeRepeticiones; iteracion = iteracion + 1) {
    let numero = solicitarYValidarNumero()
    suma = suma + numero
}
alert("El resultado es: " + suma) 