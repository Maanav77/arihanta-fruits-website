import React, { useEffect, useRef, useState } from "react";
import logo from "../sprites/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef(null);
  const lastScroll = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 18) navRef.current?.classList.add("scrolled");
      else navRef.current?.classList.remove("scrolled");

      if (y > lastScroll.current && y > 120) {
        navRef.current?.classList.add("hidden");
        navRef.current?.classList.remove("visible");
      } else {
        navRef.current?.classList.add("visible");
        navRef.current?.classList.remove("hidden");
      }

      lastScroll.current = y <= 0 ? 0 : y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE ON ESC ---------------- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------------- NAVIGATION HELPER ---------------- */
  const goToSection = (id) => {
    setMobileOpen(false);

    if (location.pathname === "/") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");

      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

  /* ---------------- JSX ---------------- */
  return (
    <>
      <header ref={navRef} className="nav" role="banner">
        <div className="container nav-inner">
          {/* BRAND */}
          <div className="brand">
            <img src={logo} alt="Arihanta" className="logo" />
            <div className="brand-title">Arihanta Fruits Pulp Agro Pvt Ltd</div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav-links">
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => goToSection("#products")}>Our Products</a>
            <a onClick={() => goToSection("#about")}>About Us</a>
            <a onClick={() => goToSection("#contact")}>Contact Us</a>
            <a className="btn-quote" onClick={() => goToSection("#contact")}>
              Request Quote
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-toggle"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`mobile-drawer-backdrop ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-drawer-inner">
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>
            &times;
          </button>

          <ul className="mobile-links">
            <li><a onClick={() => navigate("/")}>Home</a></li>
            <li><a onClick={() => goToSection("#products")}>Our Products</a></li>
            <li><a onClick={() => goToSection("#about")}>About Us</a></li>
            <li><a onClick={() => goToSection("#contact")}>Contact Us</a></li>
            <li>
              <a className="btn-quote" onClick={() => goToSection("#contact")}>
                Request Quote
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
