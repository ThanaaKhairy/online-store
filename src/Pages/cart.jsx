import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router";

export default function Cart() {
  const { cart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <h4 className="text-center">Cart is empty 😢</h4>
      ) : (
        <div className="row">
          
          {/* Products */}
          <div className="col-md-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-3 p-3 rounded shadow-sm"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="d-flex align-items-center gap-3">
                  
                  <img
                    src={import.meta.env.BASE_URL + item.image}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />

                  <div>
                    <h6>{item.name}</h6>
                    <small>${item.price}</small>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center gap-2">

                  <button
                    className="btn btn-sm"
                    onClick={() => {decreaseQty(item.id)
                      
                    }}
                    style={{
                      backgroundColor: "#eee",
                      borderRadius: "50%"
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn btn-sm"
                    onClick={() => increaseQty(item.id)}
                    style={{
                      backgroundColor: "#86A788",
                      color: "white",
                      borderRadius: "50%"
                    }}
                  >
                    +
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded" style={{ background: "#fff" }}>
              <h5>Order Summary</h5>

              <div className="d-flex justify-content-between mt-3">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>

              <button
                className="btn w-100 mt-4 py-2"
                style={{
                  backgroundColor: "#86A788",
                  color: "white",
                  borderRadius: "30px"
                }}
                onClick={() => {navigate("/checkout")
                  window.scrollTo(0, 0);
                }}
              >
                Place Order 🛒
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}