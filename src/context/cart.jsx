import { createContext, useState } from "react";


export const CartContext = createContext()

export function CartProvider ( {children} ) {
    const [cart, setCart] = useState([])
    const [cartVacio, setCartVacio] = useState(false)

    const addToCart = product => {
        const producInCartIndex = cart.findIndex(item => item.id === product.id)

        if(producInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[producInCartIndex].quantity += 1
            return setCart(newCart)
        }
        

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
        setCartVacio(true)
    }
    const clearCart = () => {
        setCart([])
        setCartVacio(false)
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            cartVacio
        }}
        > 
            {children}
        </CartContext.Provider>
    )

}
