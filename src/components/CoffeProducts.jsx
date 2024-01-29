import { useCart } from '../hooks/useCart'
import './CoffeProducts.css'

export function CoffeProducts ( {products} ) {
    const { addToCart, removeFromCart, cart } = useCart()
    const checkProducInCart = product => {
        return cart.some(item => item.id === product.id)
    } 

    return (
        <section id='coffe-products' className="coffe-products">
            <div className="coffe-products-container">
            {
                products.map(product => {
                    const isProducInCart = checkProducInCart(product) 

                    return (
                        <div className="product" key={product.id}>
                            <div className="left-img-product">
                               <img src={product.imagen} alt={product.title} />
                           </div>
                        <div className="right-content-product">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <strong>${product.price} ARS</strong>
                        <button onClick={() =>
                            {
                                isProducInCart 
                                ? removeFromCart(product)
                                : addToCart(product)
                            } 
                            }>
                            {
                                isProducInCart 
                                ? 'REMOVER DEL CARRITO'
                                : 'AGREGAR AL CARRITO'
                            }
                        </button>
                          </div>
                       </div>
                    
                )
            })
            }
            </div>
        </section>
    )
}