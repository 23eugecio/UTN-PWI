
const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']


let leonelPosition = nombres3.indexOf('leonel')
nombres3.splice('leonel')

let LucasPosition = nombres3.indexOf('lucas')
nombres3.splice(LucasPosition - 1,1)

let positionAbril = nombres3.indexOf('abril')
nombres3.splice(positionAbril, 0, 'sofia')

console.log(nombres3)


/* Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas
 */

const estaEnMinuscula = (str) =>{
    return str == str.toLowerCase()
} 
/* const estaEnMinuscula = (str) => str == str.toLowerCase() */


const tieneMayuscula = (str) =>{
    return !estaEnMinuscula(str)
} 
/* const tieneMayuscula = (str) => !estaEnMinuscula(str) */

/* console.log(!estaEnMinuscula(nombre)) */
const nombres = ['pepe', 'lucas', 'PEDRO','JuaN','pepeSito','Laura'] 

const mayusculas = [];
for (let nombre of nombres) {
    if (tieneMayuscula(nombre)) {
        mayusculas.push(nombre) 
    }
}

console.log(mayusculas);












/* 
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria caracteres}'


Ejemplo: ['pepe', 'juan'] //la sumatoria de caracteres es 8
*/

/* 
const nombres4 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

const sumarCaracteres = 0;

for(let index = 0; index < nombres3.length; index = index + 1){
    sumarCaracteres = sumarCaracteres + nombres4[index].length
}
console.log('la sumatoria de los caracteres es:'(sumarCaracteres) ) */



/* let caracteres = 0
for(let index = 0 ; index < nombres3.length; index = index + 1){

    caracteres = caracteres + nombres3[index].length
}
console.log('La cantidad de caracteres es: ' + caracteres) */


