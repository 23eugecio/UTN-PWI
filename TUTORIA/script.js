/* function ejecutarAccion (accion) {
    accion()
}

function saludar (){
    console.log('hola')
}

ejecutarAccion(saludar)


const listaDeNombres = ['juan', 'pepe', 'lucas']  */

/* Por cada nombre me muestres por consola un hola + nombre */
/* 
FOR...OF: 
Cada vez que necesite iterar un array debo usar for of 
*/

for(let nombre of listaDeNombres){
    console.log('hola ' + nombre)
} 

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
/* 
Por cada producto muestren un mensaje de alerta con el siguiente formato
El producto {nombreProducto} cuesta $ {precioProducto} y tiene el id {idProducto}
*/

for(const producto of productos){

}




/* Se puede de ambas maneras, afuera seria productos[posicionAModificar].titulo = 'value' */



/* https://github.com/CamilaSpalding/web-practice */