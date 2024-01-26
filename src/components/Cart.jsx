import { useId } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem ( {imagen, title, quantity, price, addToCart} ) {
    return (
        <>
                <li>
                    <img src={imagen} alt={title} />
                </li>
                <li>
                    Qty: {quantity}
                </li>
                <button onClick={addToCart}>+</button>
                <p>${price} ARS</p>
    
        </>
        )
}

export function Cart () {
    const cartCheckBoxId = useId()
    const { cart, clearCart, addToCart } = useCart()
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
                <div className="cart-clear-container">
                   <button onClick={clearCart}>
                     <i class="bi bi-cart-x"></i>
                   </button>
                   <p>LIMPIAR CARRITO</p>
                </div>
                
                </ul>
           </aside>
    
    
        </>
        )
    

    

}