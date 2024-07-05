import React from 'react'
import {nombre, persona} from'./funciones'
import { Button } from './components/Boton'
import Carta from './components/Carta'


/*
Los archivos .JSX permite las sintaxis  JSX (html)
  */


/* function App() {

  return (
    <div>
      <h1>hola</h1>
    </div>
  )
} */


const App = () => {


  let nombreusuario = ' julieta'
  const obtenerRandom = () => 'dato random'
    return(
      <>

        <div>
            <h1>hola{nombreusuario}</h1>
            <Button 
              texto ={ 'boton 1' }
            />
            <Carta/>
        </div>
        <div>
          <h1>hola {obtenerRandom() }</h1>   
          <Button 
            texto = {'agregar a mis favoritos'}
          />
          <Carta/>
      </div>
      
      <RowArticle
                titulo={'Lift-off: The MDN Curriculum launch'}
                fecha={'4 months ago'}
                direccion_author={'developer.mozilla.org'}
            />
            <RowArticle
                titulo={"Baseline's evolucion on MDN"}
                fecha={'7 months ago'}
                direccion_author={'developer.mozilla.org'}
            />
            <RowArticle
                titulo={'Introducing the MDN playground: Bring your code to life'}
                fecha={'a year ago'}
                direccion_author={'developer.mozilla.org'}
            />
        </>
    )
}
/*  
las funciones que retonan HTML/JSX se llamaran como componentes 
los componentes es buena practiva declararlos con MAYUSCULA
Los componentes solo pueden retornar 1 elemento padre
*/


/* 
el fragmento (<>/>)  nos permite hacer una etiqueta padre que al instanciarse/
<invocarse el componente se desechara
*/



export default App
