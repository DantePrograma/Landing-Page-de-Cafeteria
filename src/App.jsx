import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { CoffeProducts } from './components/CoffeProducts'
import { CartProvider } from './context/cart'
import { products } from './mocks/Products.js'



function App() {
 
  return (
    <CartProvider>
    <Header />
    <Main />
    <CoffeProducts products={products} />
    </CartProvider>
  )
}

export default App
