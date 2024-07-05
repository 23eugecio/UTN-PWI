// MI PRIMER OBJETO!!!
/* 
let edadUsuario = 19

let nombreUsuario = 'pepe'

let apellidoUsuario = 'suarez'


//Formato key-value 
let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    'mejoramigo': {
        "nombre": 'juan'
    }
}

console.log('Hola ' + usuario['mejor amigo']['nombre'])  */


/* 
Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string
*/

/* let objeto = {
    'precio': 150,
    'nombre':'eugenia',
    'marca': 'sakura',
    'id': 360,
    'descripcion': 'caramelos duros rosas',
}
console.log(objeto)   */


/* Abreviacion del objeto, sacando las comillas a los primeros 'strings' porque sabemos que son siempre 'strings' (son originamente 'strings')!!!!
USAMOS 'STRINGS'PARA ESCRIBIR PALABRAS CON TILDE, - , ñ, O ESPACIOS.
SE PUEDE USAR _ O CamelCase PARA EVITAR USAR 'STRINGS' */

let producto ={
    precio: 150,
    nombre: 'eugenia',
    marca: 'sakura',
    id: 360,
    descripcion: 'caramelos duros rosas',
}
console.log('El producto  ' + producto['nombre'] + ' cuesta $' + producto['precio']) 


/* const user1 = {
    name: 'pepe',
    lastname: 'suarez',
    'user1 preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user1 info':{
        'created_at': '23/07/1983',
        'adress': '9 de julio 1037', 
        tel:'+35 1147-8214'
    }
} */

/* 
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/

/* console.log('El usuario '  + user1['name'] + ' ' + user1['lastname'] +
 ' tiene las preferencias en : ' +
 '\n' + '-Modo: ' + user1['user1 preferences']['theme']+
 '\n' + '-Lenguaje: ' + user1['user1 preferences']['lang']
)
 */

/* 
Por consola mostrar un informe del usuario
'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}' */





const user = {
    name: 'Pepe',
    lastName: 'Suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
} 
/* Reasignamos el valor de la propiedad name */

user['name'] = 'Juan'
user.lastName = 'gomez '
/* creando una nueva propiedad */
user['isAdmin'] = false
user.isAdmin = true

//NO usamos notacion de . si la propiedad tiene -, ñ, letras con tilde o espacios

console.log(user['user info']) 


/* console.log('el usuario: ' + user['name'] + ' ' + user['lastname'] +
    '\n' + 'Creo su cuenta en: ' + 
    '\n'+ user['user info']['created_at'],
    '\n' + 'Vive en: ' +
    '\n' + user['user info']['adress'],
    '\n' + 'Su telefono es: ' +
    '\n' + user['user info']['tel']
)   */ 


/* PASAR LOS MENSAJES DE CONSOLA A TEMPLATE STRING */

/* console.log(`
    El usuario ${user.name} ${user.lastname} tiene las preferencias en:
    Modo: ${user['user preferences'].theme}
    Lenguaje: ${user['user preferences'].lang}
    Creó su cuenta en: ${user["user info"]["created_at"]}
    Vive en: ${user["user info"]["adress"]}
    y su teléfono es: ${user["user info"]["tel"]}
    `)  */
    
    /* Pasar nuestro mensaje a notacion de . siempre que se pueda */


console.log(`El usuario: ${user.name} ${user.lastName} tiene las preferencias en:
-Modo: ${user['user preferences'].theme}
-Lenguaje: ${user['user preferences'].lang}
`)

/* Crear una funcion llamada 
calcularIva(precio, tipo_factura) 

tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}


*/


/* const calcularIva = (precio, tipo_factura) => {
    let precioConIva = (precio * 0.21)
    let IVA 
    if (tipo_factura == 'C' || tipo_factura == 'B'){
        return {
            precio: precio,
            IVA: IVA,
            precioConIva: precioConIva,
            factura: tipo_factura
        }
    }
    else if (tipo_factura == 'A'){
        return {
            precio:  precioConIva,
            IVA: IVA,
            precioConIva: precioConIva ,
            factura: tipo_factura
        }
    }

} */


// CASO CORRECTO!!!!!! 

const calcularIva = (precio, tipo_factura) => { 
    const iva = precio * 0.21

    const resultado = {
        precio: null,
        iva: iva,
        precioConIva: precio + iva,
        factura: tipo_factura
    }
    if(tipo_factura == 'C' || tipo_factura == 'B'){
        resultado.precio = precio + iva

    }
    else if(tipo_factura == 'A'){
        resultado.precio = precio

    }
    return resultado
}


console.log(calcularIva(1000, 'A'))
console.log(calcularIva(1000, 'B'))
console.log(calcularIva())

