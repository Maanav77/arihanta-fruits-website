// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutProducts from "./components/AboutProducts";
import AsepticInfo from "./components/AsepticInfo";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />  
      <div className="site-root">
        <Navbar />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <AboutProducts />
                <AsepticInfo />
                <Products />
                <Contact />
              </main>
            }
          />

          {/* PRODUCT DETAIL PAGE */}
          <Route path="/products/:slug" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
