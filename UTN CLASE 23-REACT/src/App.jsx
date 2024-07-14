
import React from 'react'
import Container from './components/Container'


const App =() => {
    const ListaMensajes= [

        {
            autor: 'pepe',
            contenido: 'Hola?',
            fecha: 'ayer a 15:34',
            estado: 'visto',
            id: 1
        },
        {
            autor: 'yo',
            contenido: 'Sos real OMG',
            fecha: 'ayer a 15:35',
            estado: 'visto',
            id: 2
        },
        {
            autor: 'pepe',
            contenido: 'Obviamente, acaso lo dudaste?',
            fecha: 'ayer a 15:36',
            estado: 'visto',
            id: 3
        },
        {
            autor: 'yo',
            contenido: 'Jamas.',
            fecha: 'ayer a 15:37',
            estado: 'entregado',
            id: 4
        },
    ] 

    return(
        <>
        <Container ListaMensajes={mensaje}/>
        </>
    )
}



export default App