
/* SINCRONIA */
/* console.log('Hola')
   console.log('Chau') */



/* 
Fetch es una funcion que me permite hacer peticiones HTTP, recibe 2 parametros
1) URL (un string que sera la url a la que vamos a consultar o peticionar)
1) un objeto de configuracion de la peticion
*/

/* FETCH ES UN CODIGO ASINCRONICO */


/* PETICIONES: VAN EN ORDEN DE RESOLUCION POR TIEMPO */


/* BUSCAMOS LA FORMA DE TRABAJAR CON SINCRONIA CON: */

/* async await */

const solicitarUsuarios = async () => {
    const respuesta = await fetch ('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
}) 
    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
    /* Trabajaran la logica de renderizado */
}

solicitarUsuarios()


/* 
Ejecutar una peticion HTTP con metodo GET a esta direccion: https://jsonplaceholder.typicode.com/posts

Una vez obtenido el JSON de esa direccion deberas renderizar todos los posts en html en un div con la sig estructura

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>
*/
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

/* 
Crear un formulario de posteo
el formulario tendra un input para el titulo 
y un textarea para el body y un boton con el texto post que active el evento submit

Cuando se envie el formulario se debera capturar titulo y body y se envia via fetch a esta direccion: 
'https://jsonplaceholder.typicode.com/posts'
Y van a mostrar por consola un 'Enviado'
*/
/* const handleSubmit = async ( event ) =>{
    event.preventDefault()

}
formHTML.addEventListenner('submit',  handleSubmit)  */


const mainBodyHTML = document.querySelector(".mainBody")
const solicitarPost = async() =>{
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
  const resultado = await respuesta.json();
  renderizarPost(resultado);
}
const renderizarPost = (obj) =>{
  let plantilla = ``;
  for(usuario of obj){
    plantilla += `
    <div>
      <h3>${usuario.title}</h3>
      <p>${usuario.body}</p>
      <button>:corazones:</button>
    </div>
    `
  }
  mainBodyHTML.innerHTML = plantilla;
}
solicitarPost()