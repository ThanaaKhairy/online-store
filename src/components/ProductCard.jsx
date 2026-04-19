import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductCard({ product }) {

  const navigate = useNavigate();



  return (
    <div
      className="card shadow-sm rounded-3 overflow-hidden h-100"
      style={{
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backgroundColor: '#ffffff'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
      }}
    >

      {/* Product Image */}
      <div style={{ height: '320px', width: '100%', overflow: 'hidden' }}>
        <img
          src={import.meta.env.BASE_URL + product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>

      {/* Product Details */}
      <div className="p-3">

        {/* Category */}
        <div className="mb-2">
          <span
            style={{
              fontSize: '12px',
              color: '#86A788',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Name */}
        <h5
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#4A4A4A'
          }}
        >
          {product.name}
        </h5>

        {/* Price */}
        <p
          style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#E8A35E'
          }}
        >
          ${product.price.toFixed(2)}
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column gap-2">

          <button
            onClick={() => {navigate(`/product/${product.id}`) 
          window.scrollTo(0, 0);}}
            className="btn w-100 py-2"
            style={{
              backgroundColor: "#86A788",
              color: "white",
              borderRadius: "30px",
              fontWeight: "600"
            }}
          >
            View Product
          </button>


        </div>

      </div>
    </div>
  );
}