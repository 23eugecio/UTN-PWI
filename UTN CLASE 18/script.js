/* const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)

let nombre = prompt('ingresa tu nombre')


titulo.innerText ='hola' 

const cajaproducto = document.getElementById('caja-producto')
console.dir(cajaproducto)

cajaproducto.innerHTML = 
`<h2>Soy el subtitulo</h2>
<p>Tv muy linda</p>
<span>Precio: <b>$500</b></span>`
 */

/* const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
 */
const usuario =  {
    nombre: 'Dante',
    apellido: 'Lopez',
    direccion: 'Avellaneda 1452',
    edad: 5,
}
const mostrarUsuario = document.getElementById('usuario')

usuario.innerHTML = `
<h2>nombre : ${usuario.nombre}<h2>
<h2>apellido : ${usuario.apellido}<h2>
<span>edad : ${usuario.edad}<span>
<span>direccion : ${usuario.direccion} <span>
`

const productos = [
    {

    }
]

const productosHTML = document.getElementById(productos)

let plantillaProductos = ''
for(const productos of productos){}