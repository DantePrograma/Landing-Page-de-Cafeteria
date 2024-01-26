import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { CoffeProducts } from './components/CoffeProducts'
import { products } from './mocks/Products.json'
import { CartProvider } from './context/cart'

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
