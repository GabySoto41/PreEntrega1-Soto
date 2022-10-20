import React from 'react'

const ItemListContainer = (prop) => {

  let nombreCompleto = prop.nombre + " " + prop.apellido

  return (
    <div>
        <p> Hola {nombreCompleto}!</p>
    </div>
  )
}

export default ItemListContainer