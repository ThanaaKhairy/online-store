import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#86A788',
        color: 'white',
        marginTop: '60px'
      }}
    >
      <div className="container py-5">
        <div className="row">

          {/* Logo + Description */}
          <div className="col-md-4 mb-4">
            <h4 style={{ fontWeight: '700' }}>🧸 Little Store</h4>
            <p style={{ fontSize: '14px', opacity: '0.9' }}>
              Stylish and comfy clothes for your little ones.
              Made with love for every child ✨
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 style={{ fontWeight: '600' }}>Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <NavLink to="/" className="text-white text-decoration-none"  onClick={()=>{
                    window.scrollTo(0, 0);
                }}>
                  Home
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink to="/products" className="text-white text-decoration-none"  onClick={()=>{
                    window.scrollTo(0, 0);
                }}>
                  Products
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink to="/cart" className="text-white text-decoration-none"  onClick={()=>{
                    window.scrollTo(0, 0);
                }}>
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>


          <div className="col-md-4 mb-4">
            <h5 style={{ fontWeight: '600' }}>Contact</h5>
            <p className="mt-3 mb-1">📍 Cairo, Egypt</p>
            <p className="mb-1">📞 +20 123 456 789</p>
            <p> support@littlestore.com</p>
          </div>

        </div>
      </div>


      <div
        style={{
          backgroundColor: '#6B8A6D',
          textAlign: 'center',
          padding: '15px',
          fontSize: '14px'
        }}
      >
        © {new Date().getFullYear()} Little Store. All rights reserved.
      </div>
    </footer>
  );
}
