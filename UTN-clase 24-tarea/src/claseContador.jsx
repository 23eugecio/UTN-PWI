import React, { useState } from 'react'


/* 
1)Crear el boton para decrementar 

2)El decrementador no puede ser menos de 0

3)Si el contador es 10 que no se muestre el boton de <button>+</button> y se muestre un <span>no se puede incrementar mas de 10</span>

4)
Crear un componente llamado Counter que recibira una prop llamada limit
El limit sera el numero limite que tendra el contador (ya no sera siempre 10)
<Counter limit={3}/>

  */
const Counter = (props) => {
    const [contador, setContador] = useState(0)
    const handleClickAddButton = () => {
        setContador(contador + 1)
    }
    const handleClickRemoveButton = () => {
        setContador(contador > 0 ? contador - 1 : 0)
    }
    return (
        <div className='contenedor-contador'>
            <button onClick={handleClickRemoveButton}>-</button>
            <span>{contador}</span>
            {
                contador < props.limit
                    ? (<button onClick={handleClickAddButton}>+</button>)
                    : (<span>No se puede incrementar mas de {props.limit}</span>)
            }
        </div>
    )
}
export default Counter
