import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../components/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    useEffect(() => {
        async function getProduct() {
            const res = await axios.get(window.location.origin + '/babys-online-Store-/data/products.json');

            const found = res.data.products.find((p) => p.id == id);
            setProduct(found);
        }

        getProduct();
    }, [id]);

    if (!product) return <h3 className="text-center mt-5">Loading...</h3>;


    return (
        <div className="container py-5">
            <div className="row align-items-center">

                {/* Image */}
                <div className="col-md-6">
                    <div
                        style={{
                            width: "100%",
                            height: "420px",
                            overflow: "hidden",
                            borderRadius: "15px"
                        }}
                    >
                        <img
                            src={import.meta.env.BASE_URL + product.image}
                            alt={product.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                transition: "0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="col-md-6">
                    <h2>{product.name}</h2>

                    <h4 style={{ color: "#E8A35E" }}>
                        Price: {product.price}$
                    </h4>

                    <p className="mt-3">
                        Category: {product.category}
                    </p>

                    <p className="mt-3" style={{ color: "#666", lineHeight: "1.7" }}>
                        {product.description}
                    </p>

                    <button
                        onClick={() => {
                            addToCart(product);
                            alert("✅ Product added to cart!");
                        }}
                        className="btn w-100 py-2"
                        style={{
                            backgroundColor: "#86A788",
                            color: "white",
                            borderRadius: "30px"
                        }}
                    >
                        🛒 Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
}