import ProductCard from './ProductCard';

export default function ProductList({
  products,
  onAddToCart,
  title = "New Arrivals"
  
}) {
  return (
    <div className="container py-5">

      {/* Section Header */}
      <div className="text-center mb-5">
        <h2
          className="mb-2"
          style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#86A788',
            letterSpacing: '-0.5px'
          }}
        >
          🧸 {title}
        </h2>


        <div
          className="mx-auto mt-3"
          style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#E8A35E',
            borderRadius: '2px'
          }}
        />
      </div>


      <div className="row g-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-lg-4"
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}

      </div>
    </div>
  );
}