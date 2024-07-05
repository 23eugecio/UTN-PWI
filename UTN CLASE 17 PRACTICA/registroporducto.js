/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/

const categoriasDisponibles = ['tecnologia', 'hogar', 'otros']
const validarStringConMinino = (valor, minimo) => valor && isNaN(valor) && valor.length >= minimo
const validarTitulo = (valor) =>validarStringConMinino(valor, 4)
const validarPrecio = (valor) => valor && !isNaN(valor) && valor > 1
const validarDescripcion = (valor) => validarStringConMinino (valor, 10)
const validarCategoria = (valor) => categoriasDisponibles.includes(valor)
const validarMarca = (valor) => validarStringConMinino (valor, 3)
const validarNegacion = () => confirmacion === null || confirmacion.toLowerCase() === 'cancelar' || confirmacion.toLowerCase() === 'no'


const crearObjetoConfeccion = (mensaje, error, validacion) =>{
    return {
        mensaje: mensaje,
        error: error,
        valicacion: validacion
    }
}


const solicitarDato = (objetoDeConfeccion) => {

    let dato = prompt(objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato = prompt(objetoDeConfeccion.error)
    }
    return dato
}

const Datos_Productos = {
    Titulo: crearObjetoConfeccion(
        'Ingrese un titulo min (4) caracteres',
        'Error al ingresar titulo, ingrese nuevamente',
        validarTitulo
    ),
    Precio: crearObjetoConfeccion(
        'Ingrese un precio positivo mayor a $1',
        'Error al ingresar precio, ingrese nuevamente',
        validarPrecio
    ),
    Descripcion: crearObjetoConfeccion(
        'Ingrese una descripcion min (10) caracteres',
        'Error al ingresar descripcion, ingrese nuevamente',
        validarDescripcion
    ),
    Categoria: crearObjetoConfeccion(
        'Ingrese una categoria valida, (categorias validas ' + categoriasDisponibles.join(', ') +')',
        'Error al ingresar una categoria, (categorias validas ' + categoriasDisponibles.join(', ') +')',
        validarCategoria
    ),
    Marca: crearObjetoConfeccion(
        'Ingrese una marca min (3) caracteres',
        'Error al ingresar la marca, ingrese nuevamente',
        validarMarca
    ),
}



const registrarProducto = () => {


    let titulo = solicitarDato(Datos_Productos.Titulo)
    let precio = solicitarDato(Datos_Productos.Precio)
    let descripcion = solicitarDato(Datos_Productos.Descripcion)
    let categoria = solicitarDato(Datos_Productos.Categoria)
    let marca = solicitarDato(Datos_Productos.Marca)

    let mensajeConfirmacion = `
    Esta seguro de confirmar el producto:
    Titulo: ${titulo}
    Precio: ${precio}
    Descripcion: ${descripcion}
    Categoria: ${categoria}
    Marca: ${marca}
    `
    let confirmacion = prompt(mensajeConfirmacion)
    if(validarNegacion(confirmacion)){
        registrarProducto(Datos_Productos)
    }
    else if(producto = Datos_Productos ===
                titulo,
                precio,
                descripcion,
                categoria,
                marca
            ){producto.push(Datos_Productos)
            }
            console.log(producto);
    }
    
registrarProducto()




