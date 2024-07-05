/* import React from 'react'
import Button from './Components/Button'
import Layout from './Components/Layout'

function App() {

  return (
    <ContactScreen/>
  )
}


const ContactScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de contacto</h2>
      <form action="">

      </form>
      <Button>
        Click <i class="bi bi-window-sidebar"></i>
      </Button>
    </Layout>
  )
}
const ProductsScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de productos</h2>
      <h3>Este es el subtitulo</h3>
      
    </Layout>
  )
}

export default App */


import React from 'react'

import CodePointInfo from './Components/CodePointInfo'

function App() {

  return (
    <CodePointInfo>
      <span>Unicode: valor</span>
      <span>CSS: valor</span>
      <span>JS: valor</span>
      <span>HTML: valor</span>
    </CodePointInfo>
  )
}
  export default App


function App() {
  return (
    <RowFunction tittle='Code point'>
      <br />
    <span>Unicode: U+F61F</span>
    <br />
    <span>CSS: \F61F</span>
    <br />
    <span>JS: \uF61F</span>
    <br />
    <span>HTML: &#xF61F;</span>
    </RowFunction>
  )
}


