import { useId, useRef } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem ( {imagen, title, quantity, price, addToCart} ) {
    return (
        <>
                <li>
                    <img src={imagen} alt={title} />
                    <div className="quantity-section">
                        <div className="quantity">
                            <p>CANTIDAD: <strong>{quantity}</strong></p>
                            <button onClick={addToCart}>+</button>
                        </div>
                        <strong>${price} ARS</strong>
                    </div>
                
                </li>
        </>
        )
}

export function Cart () {
    const cartCheckBoxId = useId()
    const { cart, clearCart, addToCart, cartVacio } = useCart()
    
    return (
        <>
          <label className="cart-button" htmlFor={cartCheckBoxId}>
           <i className="bi bi-cart-fill"></i>
           </label>
           <input type="checkbox" id={cartCheckBoxId} hidden/>
           
    
           <aside className="cart">
            <ul>
                <div className="title-close-cart">
                <h1>Carrito</h1>
                <label className='close-cart-button' htmlFor={cartCheckBoxId}>
                <i className="bi bi-x-lg"></i>
                <p>Cerrar</p>
                </label>
                <input type="checkbox" id={cartCheckBoxId} hidden/>
                </div>
            
                {
                    cart.map(product => (
                        <CartItem 
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product}
                        />
                    ))
                }
                
                
                </ul>
                {
                cartVacio ?
                <div className="cart-clear-container">
                    <button onClick={clearCart}>
                    <i className="bi bi-cart-x"></i>
                </button>
                    <p>LIMPIAR CARRITO</p>
                </div>
                : 
                <div className="cart-vacio">
                    <i class="bi bi-cart-x"></i>
                    <p>No hay productos en el carrito</p>
                </div>
                }
                
           </aside>
    
    
        </>
        )
    

    

}