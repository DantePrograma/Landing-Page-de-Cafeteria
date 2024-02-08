import "./App.css";
import Footer from "./components/Footer.jsx";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { CoffeProducts } from "./components/Screens/CoffeProducts.jsx";
import { CartProvider } from "./context/cart";
import { products } from "./data/Products.js";
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
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
