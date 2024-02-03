import React from 'react'
import './Productos.css'

export const Productos = ({ props}) => {
  return (
    <section className="productos-section">
        <ul>
            {
                props.map(product => {
                    return <li key={product.id}>
                        <img src={product.imagen} alt={product.title} />
                        <p>{product.title}</p>
                    </li>
                })
            }
        </ul>
    </section>
  )
}
