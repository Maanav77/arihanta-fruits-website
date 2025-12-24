import React, { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { productsData } from "../data/productsData";

export default function Products() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const vh = () => window.innerHeight || document.documentElement.clientHeight;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting && !el.classList.contains("card-animated")) {
            const rect = entry.boundingClientRect;
            const cardCenter = (rect.top + rect.bottom) / 2;
            const viewportCenter = vh() / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            const norm = Math.min(1, distance / (vh() / 2));
            const delay = Math.round(((norm * 0.45) + 0.03) * 100) / 100;

            el.style.setProperty("--reveal-delay", `${delay}s`);
            el.classList.add("card-visible", "card-animated");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section pp" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-sub">Aseptic fruit pulps and concentrates.</p>

        <div className="products-grid">
          {productsData.map((item, i) => (
            <ProductCard
              key={item.slug}
              item={item}
              ref={(el) => (cardsRef.current[i] = el)}
              onPreload={() => {
                if (item.detailImg) {
                  const img = new Image();
                  img.src = item.detailImg;
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
