/* Callback:
cuando una funcion es pasada por parametro
*/
/* 
function ejecutarAccion (accion) {
    accion()
}

function saludar(){
    console.log('saludar')
}

ejecutarAccion(saludar)
ejecutarAccion(function(){
    console.log('saludar')
})

let mensaje = 'hola'

ejecutarAccion('hola')
ejecutarAccion(mensaje) */

/* const nombres = ['pepe', 'juan', 'maria', 'maria'] */

/* Quiero los que sean 'maria' */
/* 
function filtrar(lista, condicionCallback){
    const result = []
    for(let elemento of lista){
        if(condicionCallback(elemento)){
            result.push(elemento)
        }
    }
    return result
}


const listaMarias = filtrar(nombres, function(elemento){return elemento == 'maria'})

console.log(listaMarias) */

/* 
Falsy:
null
''
undefined
false
-0
0
NaN
*/

/* 
La negacion siempre trae el valor Booleano opuesto al valor que estoy negando
*/

/* let dato = NaN

console.log(!{})

let edad = 15

let condicion = edad >= 18

let soyMenorEdad = !condicion */

/* memory management*/

/* const persona = {nombre: 'juan'}



console.log('hola ' + persona.nombre) */

/* 
const listaDeNombres = ['juan', 'pepe', 'lucas'] 
 */

/* Por cada nombre me muestres por consola un hola + nombre */

/* 
FOR...OF: 
Cada vez que necesite iterar un array debo usar for of 
*/

/* for(let nombre of listaDeNombres){
    console.log('hola ' + nombre)
} */

/* 
const productos = [
    {
        titulo: 'tv samsung 42"',
        precio: 5000,
        id: 1
    },
    {
        titulo: 'tv samsung 52"',
        precio: 10000,
        id: 2
    },
    {
        titulo: 'tv samsung 72"',
        precio: 100000,
        id: 3
    }
]
 */
/* 
Por cada producto muestren un mensaje de alerta con el siguiente formato

El producto {nombreProducto} cuesta $ {precioProducto} y tiene el id {idProducto}
*/


/* const productos_1 = ['tv samsung', 'celular', 'teclado']

for(producto in productos_1){
    console.log('mi producto es ' + productos_1 )
}
 */
/* 
Una vez corregido, decir que dira por consola y cuantas veces 
 */
/* 
const personas =[
        { 
            nombre: 'pepe', 
            mano: 'vacia' 
        }, 
        { 
            nombre: 'juan', 
            mano: 'vacia' 
        },
        { 
            nombre: 'leo', 
            mano: 'vacia' 
        },
        { 
            nombre: 'maria', 
            mano: 'vacia' 
        }
    ]

let alfajor = 'terrabusi' */

/* personas[0].mano = alfajor
personas[1].mano = alfajor */

/* 
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 18
}


for(let propiedad in persona){
    console.log(persona[propiedad])
}
 */

const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 18
}

console.log(persona['nombre'])
console.log(persona.nombre) //persona['nombre']
console.log(persona.propiedad) //persona['propiedad']

/* 
A partir del sig objeto de informacion quiero que generen una plantilla de informacion y la muestren por consola:

nombre: pepe\n
apellido: suarez\n
edad: 18\n

*/
/* Este es el output a lograr */
console.log('nombre: pepe\napellido: suarez\nedad: 18\n')


let respuesta = ''

for(let propiedad in persona){
    respuesta = respuesta + `${propiedad}: ${persona[propiedad]}\n`
}

console.log(respuesta)