import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { CoffeProducts } from './components/CoffeProducts'
import { CartProvider } from './context/cart'
import { SeccionProductos, products } from './data/Products.js'
import { useState } from 'react'
import { Productos } from './components/Productos.jsx'



function App() {
  const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        const isMobile = window.innerWidth <= 850;
        if (isMobile) {
            setClicked(!clicked);
        }
    }
 
  return (
    <CartProvider>
    <Header clicked={clicked} handleClick={handleClick} />
    <Main />
    <CoffeProducts products={products} />
    <Productos props={SeccionProductos} />
    </CartProvider>
  )
}

export default App
