import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(window.location.origin + '/babys-online-Store-/data/products.json');
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const handleFilter = (category) => {
    setActiveCategory(category);

    let data =
      category === "All"
        ? products
        : products.filter((p) => p.category === category);

    if (searchTerm) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(data);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);

    let data = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    if (activeCategory !== "All") {
      data = data.filter((p) => p.category === activeCategory);
    }

    setFilteredProducts(data);
  };

  const handleAddToCart = (product) => {
    alert(`🛒 ${product.name} added to cart`);
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>



      <div className="container pt-4">
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            placeholder="🔍 Search product..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="form-control w-50"
          />
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className="btn px-4 py-2"
              style={{
                borderRadius: "30px",
                border: "1px solid #86A788",
                backgroundColor:
                  activeCategory === cat ? "#86A788" : "transparent",
                color:
                  activeCategory === cat ? "white" : "#86A788",
                fontWeight: "500",
                transition: "0.3s"
              }}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      {/* 🧸 PRODUCTS */}
      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
        title="All Products"
        subtitle="Explore our full collection 🧸"
      />
    </div>
  );
}