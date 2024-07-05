

//FOR
/* Es un bucle que usamos cuando queremos repetir un bloque de codigo una determinada cantidad de veces.
Bucle de conteo. */


/* Di por consola 50 hola mundo */

//DRY = dont repeat yourself
/* 
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo') 
*/
//  inicio          ;   limite      ; ritmo de actualizacion
/* for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    console.log('Hola mundo ' + iterador)
}  */ 


/* Solicitar 1 nombre y mostarlo por alerta 3 veces

*/

/* for(let i = 1; i <= 3 ; i = i + 1) {
    let nombre = prompt('Ingrese un nombre: ')
    alert(nombre)
} */


/*  */

/* Solicitar 3 nombres y al final mostarlos en lista
lista de nombre:
-pepe
-juan
-ezequiel
*/
 
let listaDeNombres = 'Lista de nombres: '
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    let nombre = prompt('Ingrese un nombre')
    listaDeNombres = listaDeNombres + '\n' +  nombre
}

alert(listaDeNombres) 

/* 
vamos a solicitar un numero 3 veces al finalizar mostrar el resultado de la sumatoria entre los 3 numeros

EJ:
3
3
2
Resultado: 8
*/

/* 
camelCase = listaDeNumeros
snake_case = lista_de_numeros

español = snake_case
ingles = camelCase
*/
/* let listaDeNumeros = ''
let sumaNumeros = 0
for (let i = 1 ; i <= 3 ; i = i + 1) {
    let numero = Number(prompt("Escribir un numero"))
    listaDeNumeros = listaDeNumeros + "\n" + numero
    sumaNumeros = sumaNumeros + numero
}
alert(listaDeNumeros)
alert(sumaNumeros) */