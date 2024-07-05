/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/

const carrito = [ 
{
    nombre: 'Campera LISA',
    id: 1,
    precio: $300000,
    cantidad: 25,
    thumbnail: 'https://static.wixstatic.com/media/76c18a_572f5e1532f2497fb9cbe70c24557973~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
},
{
    nombre: 'Campera ELIAL',
    id: 2,
    precio: $800000,
    cantidad: 32,
    thumbnail: 'https://i.pinimg.com/736x/52/4f/90/524f90944850ee29f54d643caa7ed5f3.jpg',
},
{
    nombre: 'Campera LOIS',
    id: 3,
    precio: $150000,
    cantidad: 27,
    thumbnail: 'https://notilook.com.ar/wp-content/uploads/2019/09/campera-de-cuero-blanca-mujer-y-bermuda-ciclista-engomada-Boken-verano-2020.jpeg',
}
]


const renderizarCarrito = (carrito) => {
    const carritoHTML = document.getElementById("carrito")
    const totalHTML = document.getElementById('total') 


    let plantillaCarrito = ``
    for(const item of carrito){
        total = total + (item.precio * item.cantidad)
        plantillaCarrito = plantillaCarrito + `
        <div>
            <h1>${item.nombre} #${item.id} </h1>
            <Img width= '100px' src="${item.thumbnail}"/>
            <br>
            <span>Precio: ${item.precio} + ${item.cantidad}</span>
            <span>Total: ${item.precio * item.cantidad}</span>
            <button>comprar</button>
        </div>
    <hr>`
    }
    carritoHTML.innerHTML = plantillaCarrito
    totalHTML.innerText ='Total: $' + total
}

renderizarCarrito(carrito)
console.log(carrito)

/* Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1 */

const nuevoItem = carrito ()

const agregarAlCarrito = () => {
    [
    {
        nombre: 'Campera LOLA',
        id: 5,
        precio: $800000,
        cantidad: 1,
        thumbnail: 'https://briganti.com.ar/cdn/shop/articles/MG_0040.jpg?v=1628518551',
    },
] 
}
const itemBuscado = carrito.find = (carrito) =>{
    nuevoItem.push('Campera LOLA');

}
    
renderizarCarrito(carrito)


const item = carrito.find((carrito) => carrito.id === id)
    if(agregarItem){
        itemBuscado.cantidad += 1
    } else {
        const nuevoItem = carrito.find((item) => item.id === id)
        if(nuevoItem){
            nuevoItem.cantidad = 1
            carrito.push(nuevoItem)
        } else {
            console.error('ERROR: id no existente')
        }
    }
    renderizarCarrito(carrito)

    const agregarItemAlCarrito = (producto) => {
        const itemBuscado = carrito.find((item) => item.id === producto.id)
        if(itemBuscado){
            /* Logica para incrementar la cantidad */
            itemBuscado.cantidad = itemBuscado.cantidad + 1
            /* 
            Proceso interno: String(itemBuscado) + 1
                            '[Object object]' + 1
                            '[Object object]1'
            */
            /* Sugar syntax */
          /*   itemBuscado.cantidad += 1 */
        } else {
            /* Logica para agregar el producto al carrito */
            producto.cantidad = 1
            carrito.push(producto)
            
        }
        renderizarCarrito(carrito)
        /* SIEMPRE QUE MODIFIQUE MI CARRITO DEBO RE-RENDERIZAR */
        
    }
/*     console.log(carrito) */

    
    
    
    
    
    
    


