import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { CoffeProducts } from './components/CoffeProducts'
import { CartProvider } from './context/cart'
import { products } from './mocks/Products.js'
import { useState } from 'react'



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
    </CartProvider>
  )
}

export default App
