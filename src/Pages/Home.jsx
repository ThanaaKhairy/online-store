import { useEffect, useState } from 'react';
import Hero from '../components/HeroSection';
import ProductList from '../components/ProductList';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Home() {

  const [products, setProducts] = useState([]);
  let navigator = useNavigate()
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(window.location.origin + '/babys-online-Store-/data/products.json');
        
        console.log(res)
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    alert(`✨ ${product.name} added to cart!`);
  };

  return (
    <>
      <Hero />

      <div className="App">
        <ProductList 
          products={products.slice(0,6)}  
          onAddToCart={handleAddToCart}
          title="New Arrivals"
        />
      </div>

<div className="d-flex justify-content-center mt-4">
  <button
    onClick={() => {
  window.scrollTo(0, 0);
  navigator('/products');
}}
    className="btn d-flex align-items-center justify-content-center gap-2 px-5 py-3"
    style={{
      background: 'linear-gradient(135deg, #86A788, #6B8A6D)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: '600',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    }}
  >
    🛍️ Shop Now
    <span style={{ fontSize: '18px' }}>→</span>
  </button>
</div>
    </>
  );
}