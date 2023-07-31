import React from 'react'
import "./Producto.css"

function Producto({title="Titulo por definir", price="precio por definir", description="descripcion por definir"}) {
  return (
    <div className='Card'>
      <img src='' alt='' />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p>{description}</p> 
    </div>
  )
}

export default Producto
