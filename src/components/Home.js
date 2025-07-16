import { createContext, useContext } from "react";
import { TheamContext } from "../Context/TheamContext";

function Home() {
  // const context = createContext(TheamContext);
  const { theme: theme1 } = useContext(TheamContext);
  console.log(theme1);
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to <h1 style={{color:'orange',display:"inline"}}>KrushnaKart</h1></h1>
        <p>Your one-stop destination for smart gadgets and cool deals!</p>
        <a href="/products" style={{ height: 50 }} className="btn btn-primary">Shop Now</a>
      </div>

      <div className="features-section">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="features">
          <div className="feature-card">
            <i className="fas fa-shipping-fast feature-icon"></i>
            <h4>Fast Delivery</h4>
            <p>Lightning-fast shipping across India for all your tech needs.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-rupee-sign feature-icon"></i>
            <h4>Best Prices</h4>
            <p>Unbeatable prices on your favorite brands and gadgets.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-thumbs-up feature-icon"></i>
            <h4>Trusted Quality</h4>
            <p>We only sell verified, top-rated, and trusted products.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
