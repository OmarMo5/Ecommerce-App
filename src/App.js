import React, { useState } from 'react';
import {BrowserRouter, Routes,Route, HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Product from './components/Product.js';
import ProductDetail from './components/ProductDetail.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';
import ProductsHook from './components/ProductsHook.js';

const App = () => {
  const [products] = ProductsHook();
  const [data, setData] = useState([...products]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <HashRouter>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} products={data} />} />
          <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </HashRouter>
      <Footer/>
    </>
  )
}

export default App