import React from 'react'

import ColorsContainer from './Components/ColorsContainer/ColorsContainer'



function App() {
const cartas_colores = [
  { 
    color: ['#FF7F3E', '#FFF455', '#FFC700', '#EE4E4E'],
    likes: 886,
    time: '2 weeks',
    id: 1,
  },
  {
    color: ['#FFF5E1', '#FF6969', '#C80036', '#0C1844'],
    likes: 1550,
    time: '2 weeks',
    id: 2,
  },
  {
    color: ['#102C57', '#1679AB', '#FFB1B1', '#FFCBCB'],
    likes: 1396,
    time: '2 weeks',
    id: 3,
  },
  {
    color: ['#059212', '#06D001', '#9BEC00', '#F3FF90'],
    likes: 1001,
    time: '2 weeks',
    id: 4,
  }

]

  return (
    <>
      <ColorsContainer cartas_colores={cartas_colores}/>
    </>
  )

}
export default App