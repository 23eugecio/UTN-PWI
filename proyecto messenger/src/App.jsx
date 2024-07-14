import React from 'react'
import Chats from './Components/ContenedorChat/ContenedorChat.jsx'
import '../global.css'


const App = () =>  {

  const mensajes= [
    {
      author: 'pepe',
      content: 'Hola?',
      fecha: 'ayer a 15:34',
      estado: 'visto',
      id: 1
    },
    {
      author: 'yo',
      content: 'Sos real OMG',
      fecha: 'ayer a 15:35',
      estado: 'visto',
      id: 2
    },
    {
      author: 'pepe',
      content: 'Obviamente, acaso lo dudaste?',
      fecha: 'ayer a 15:36',
      estado: 'visto',
      id: 3
    },
    {
      author: 'yo',
      content: 'Jamas.',
      fecha: 'ayer a 15:37',
      estado: 'entregado',
      id: 4
    },
  ]


return ( 
<Chats mensajes={mensajes}/>
)
}


export default App