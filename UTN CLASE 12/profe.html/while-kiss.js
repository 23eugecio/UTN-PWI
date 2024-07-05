
/* WHILE,
el bucle while repite un bloque de codigo mientras se cumpla x condicion

*/

/* 
let numero = prompt('ingrese un numero')

while(!numero || isNaN(numero)){
    alert('NO ingresaste un dato numerico')
    numero = prompt('Ingresa un dato numerico por favor')
}

 */
/* 
Solicitar un string al usuario y validar que sea un string valido
Casos invalidos:
''
null
number (cualquier tipo de number excepto el NaN)
*/

//KISS = keep it simple
/* let nomb = prompt('Ingrese su nombre')
while(!nomb || !isNaN(nomb)){
    alert('Error de dato')
    nomb = prompt('Ingrese su nombre')
} */

/* let texto = prompt ('ingrese una palabra')
while( !texto || !isNaN(texto)){
    alert('no ingreso un dato valido')
    texto = prompt ('ingrese una palabra')
} */




/* NUNCA PONER UN TRUE EN LAS CONDICIONES DEL WHILE PORQUE SINO SERIA UN BLOQUE INFINITO Y TAMPOCO PONER NUMERO PORQUE ES UN STRING ENTONCES SERIA UN TRUE Y SIEMPRE DEBEMOS PONER UN DATO FALSY COMO CONDICIONES EN EL WHILE!!!! 
    SIEMPRE DATOS FALSY EN EL WHILE.*/


let numero = prompt('Ingrese un dato numerico: ')
    while(!numero || isNaN(numero)){
        alert('NO ingreso un dato numerico')
        numero = prompt('Ingresa un dato numerico')
    }



/* Solicitar un string al usuario y validar que sea un string valido
Casos invalidos:
''
null
number (cualquier tipo de number excepto el NaN)
*/

let texto = prompt ('ingrese una palabra')
while(!texto || isNaN(texto)){
    alert('no ingreso un dato valido')
    texto = prompt('ingrese una palabra')
}


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
alert("El resultado es: " + suma)  */




/* NO SE CUMPLE EL PRINCIPIO DRY, SE REPITE EL WHILE */



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
alert("El resultado es: " + suma) 
 */


/* USAMOS UNA FUNCTION PARA QUE SE CUMPLA EL PRINCIPIO DRY!!! */

function validarNumero (){
    let numero = prompt('Ingrese un numero')
    while (!numero || isNaN(numero)) {
        alert("El dato debe ser un numero")
        numero = prompt("Ingrese el numero: ")
    }
    return Number(numero)
}

let edad = validarNumero
