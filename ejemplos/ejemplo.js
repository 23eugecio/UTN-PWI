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
                <h3>${item.nombre} #${item.id} </h3>
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
    
    