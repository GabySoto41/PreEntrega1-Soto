import React from 'react'
import ItemListContainer from "./components/ItemListContainer"

const Main = () => {
  return (
    <div id="main">
        <ItemListContainer nombre="Gaby" apellido= "Soto" edad= {35} className="cont"/>
    </div>
  )
}

export default Main