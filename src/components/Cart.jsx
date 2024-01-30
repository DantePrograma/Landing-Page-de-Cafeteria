import { useId } from 'react'
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
    const { cart, clearCart, addToCart, removeFromCart } = useCart()
    return (
        <>
          <label className="cart-button" htmlFor={cartCheckBoxId}>
           <i className="bi bi-cart-fill"></i>
           </label>
           <input type="checkbox" id={cartCheckBoxId} hidden/>
           
    
           <aside className="cart">
            <ul>
            <h1 className='cart-h1'>Carrito</h1>
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
                <div className="cart-clear-container">
                   <button onClick={clearCart}>
                     <i className="bi bi-cart-x"></i>
                   </button>
                   <p>LIMPIAR CARRITO</p>
                </div>
           </aside>
    
    
        </>
        )
    

    

}