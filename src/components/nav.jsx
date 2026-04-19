import { NavLink } from 'react-router';
import { useCart } from "../components/CartContext";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import logo from '/images/Cream and Green Simple Clean Online Store Logo.png'

export default function Nav() {
    const { cart } = useCart();

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg py-3 sticky-top">
            <div className="container">

                {/* Logo */}
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        width="50"
                        height="50"
                    />
                </NavLink>

                <button 
                onClick={()=>{
                    window.scrollTo(0, 0);
                }}
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-3">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"  onClick={()=>{
                    window.scrollTo(0, 0);
                }}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products"  onClick={()=>{
                    window.scrollTo(0, 0);
                }}>
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link position-relative" to="/cart"  onClick={()=>{
                    window.scrollTo(0, 0);
                }}>
                                Cart
                                {cartCount > 0 && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "-5px",
                                            right: "-10px",
                                            background: "red",
                                            color: "white",
                                            fontSize: "12px",
                                            borderRadius: "50%",
                                            width: "18px",
                                            height: "18px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        {cartCount}
                                    </span>
                                )}
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}