/* onst nombres =['pepe','juan','jose']

console.log (nombres[1])
console.log ('tengo' + nombres.length + 'nombres') 
 */

/* nombres.push('maria')
console.log(nombres)  */

/* 
let ultimoElemento = nombres.pop()
console.log(ulti/* moElemento) */


/* let posicionDeJuan = nombres.indexOf('juan')
console.log('la posicion de juan es ' + posicionDeJuan)
 */


/* const nombres2 = ['maria', 'pedro', 'leonel','ezequiel', 'elias']

let posicionDeEzequiel = nombres2.indexOf('ezequiel')


const listaDeEliminados = nombres2.splice(posicionDeEzequiel, 0, 'lucas')

console.log(nombres2)
console.log('la lista de eliminado es: ' , listaDeEliminados)
 */



const nombres3 = ['maria', 'pedro', 'leonel','ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

// eliminar a Leonel
// elimanr a el anterior a lucas
// agregar a sofia antes de abril, sin borrar a abril

let posicionDeLeonel = nombres3.indexOf('leonel')
nombres3.splice(posicionDeLeonel, 1)

let posicionDeLucas = nombres3.indexOf('lucas')
nombres3.splice((posicionDeLucas - 1), 1)

let posicionDeAbril = nombres3.indexOf('abril')
nombres3.splice((posicionDeAbril), 0, 'sofia')

console.log(nombres3)








