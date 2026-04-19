import { useCart } from "../components/CartContext";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [paid, setPaid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onChange" });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const onSubmit = () => {
    setPaid(true);
    clearCart();
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">💳 Checkout</h2>

      {paid ? (
        <div
          className="text-center mt-5"
          style={{
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h4>✅ Payment Successful!</h4>
          <p>Thank you for your order 🎉</p>
        </div>
      ) : cart.length === 0 ? (
        <h4 className="text-center">Your cart is empty 😢</h4>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">

            {/* Form */}
            <div className="col-md-7">
              <div className="p-4 shadow-sm rounded" style={{ background: "#fff" }}>
                <h5 className="mb-3">Billing Details</h5>

                {/* Name */}
                <input
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z\s]{3,}$/,
                      message: "Enter valid name"
                    }
                  })}
                  className="form-control mb-1"
                  placeholder="Full Name"
                />
                <small className="text-danger">{errors.name?.message}</small>

                {/* Email */}
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-z0-9]+@gmail\.com$/,
                      message: "Enter valid email"
                    }
                  })}
                  className="form-control mb-1 mt-3"
                  placeholder="Email"
                />
                <small className="text-danger">{errors.email?.message}</small>

                {/* Address */}
                <input
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 5,
                      message: "Address too short"
                    }
                  })}
                  className="form-control mb-1 mt-3"
                  placeholder="Address"
                />
                <small className="text-danger">{errors.address?.message}</small>
                {/* phone */}

                <input
                  {...register("phone", {

                    required: "phone is required",
                    pattern: {
                      value: /^01[0125][0-9]{8}$/,
                      message: "enter valid phone"
                    }
                    
                  })}
                  className="form-control mb-1 mt-3"
                  placeholder="Phone"
                />
                <small className="text-danger">{errors.phone?.message}</small>
              </div>
            </div>

            {/* Summary */}
            <div className="col-md-5">
              <div className="p-4 shadow-sm rounded" style={{ background: "#fff" }}>
                <h5 className="mb-3">Order Summary</h5>

                {cart.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>${total.toFixed(2)}</strong>
                </div>

                <button
                  type="submit"
                  className="btn w-100 py-2"
                  style={{
                    backgroundColor: isValid ? "#86A788" : "#ccc",
                    color: "white",
                    borderRadius: "30px",
                    cursor: isValid ? "pointer" : "not-allowed"
                  }}
                  disabled={!isValid}
                >
                  Confirm Order
                </button>
              </div>
            </div>

          </div>
        </form>
      )}
    </div>
  );
}