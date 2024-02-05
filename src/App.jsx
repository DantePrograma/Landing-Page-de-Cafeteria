import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { CoffeProducts } from "./components/Screens/CoffeProducts.jsx";
import { CartProvider } from "./context/cart";
import { SeccionProductos, products } from "./data/Products.js";
import { Productos } from "./components/Screens/Productos.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="products"
            element={<CoffeProducts products={products} />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
