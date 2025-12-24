import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../sprites/logo.png";


export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    // If already on home page
    if (location.pathname === "/") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Go home first, then scroll
      navigate("/");
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        
        {/* LEFT */}
        <div className="footer-col-left">
          <div className="brand-lockup">
            <img
              src={logo}
              alt="Arihanta Logo"
              className="footer-logo"
            />
            <div className="brand-title">ARiHANTA</div>
          </div>
          <div className="muted">
            © {new Date().getFullYear()} ARiHANTA. All rights reserved.
          </div>
        </div>

        {/* MIDDLE: QUICK LINKS */}
        <div>
          <div className="footer-heading">Quick Links</div>
          <ul className="footer-links">
            <li onClick={() => goToSection("#about")}>About Us</li>
            <li onClick={() => goToSection("#products")}>Products</li>
            <li onClick={() => goToSection("#contact")}>Contact</li>
          </ul>
        </div>

        {/* RIGHT: CERTIFICATIONS */}
        <div>
          <div className="footer-heading">Certifications</div>

          <div className="cert-item">
            <img
              src="/fssailogo.jpg"
              alt="FSSAI Logo"
              className="cert-img"
            />
            <div className="muted">Lic: 11425999000363</div>
          </div>

          <div className="cert-item">
            <img
              src="/gstlogo.jpg"
              alt="GST Logo"
              className="cert-img"
            />
            <div className="muted">GST: 23AAVCA3624Q1Z0</div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
