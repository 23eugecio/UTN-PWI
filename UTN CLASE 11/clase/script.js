/* 
solicitar al usuario una edad y un lenguaje favorito
Si su edad es mayor a 16 y su lenguaje favortio es 'JS' 
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/


let edad = prompt('ingresa-tu-edad')
let lenguaje_fav = prompt('ingresa tu lenguaje favorito')
    if(edad > 16 && lenguaje_fav === "JS")
        {
    console.log('Bienvenidos al desarollo web frontend')
    }
    else if(edad > 14 && lenguaje_fav == 'PHP'){
    console.log('Bienvenido al desarrollo web backend')
    }
    else{
    console.log('no se puede ser perfecto en todo')
    }
