import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';
import logo from '/images/logo2.jpg'
export default function Hero() {
  let navigate = useNavigate()
  return (
    <section
      style={{
        background: "#ffffff",
        padding: '40px 0',
        marginBottom: "20px"
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1
              style={{
                fontSize: '55px',
                fontWeight: '700',
                color: '#4A4A4A',
                lineHeight: '1.3'
              }}
            >
              🧸 Little Style, Big Smiles
            </h1>

            <p
              style={{
                fontSize: '20px',
                color: '#777',
                marginTop: '15px',
                maxWidth: '500px'
              }}
            >
              Discover the cutest outfits for your little ones. Comfort, style, and joy in every piece ✨
            </p>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
              <button
                className="btn px-4 py-2"
                style={{
                  backgroundColor: '#86A788',
                  color: 'white',
                  borderRadius: '30px',
                  fontWeight: '700'
                }}
                 onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/products');
                }}
              >
                Shop Now 🛍️
              </button>

             
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={logo}
              alt="Kids Fashion"
              className="img-fluid"
              style={{
                borderRadius: '20px',
                width: '100%',
                maxWidth: '1000px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}