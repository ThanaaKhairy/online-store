
import { Route, Routes } from 'react-router'
// import './App.css'
import Footer from './components/footer'
import Nav from './components/nav'

import Home from './Pages/Home'
import Products from './Pages/products'
import Cart from './Pages/cart'
import ProductDetails from './Pages/ProductDetails'

import Checkout from './Pages/Checkout'

function App() {

  return (
   <>
   <Nav/> 

      

 <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>

          
    
 <Footer/>


   </>
  )
}

export default App
