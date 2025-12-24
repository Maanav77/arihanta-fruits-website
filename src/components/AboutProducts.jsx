// src/components/AboutProducts.jsx
import React, { useEffect, useRef } from "react";

export default function AboutProducts() {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When 15% of the item is visible on screen...
          if (entry.isIntersecting) {
            // ...add the class that triggers the animation
            entry.target.classList.add("visible");
            // Stop observing (so it doesn't animate again when scrolling up)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 } // 0.15 ensures it triggers easily on mobile
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="section about-products-wrapper">
      <div className="container">
        {/* Added ref={cardRef} and className="reveal-zoom" */}
        <div className="about-products-card reveal-zoom" ref={cardRef}>
          
          {/* IMAGE */}
          <img
            className="about-products-img"
            src="/pulpfinal.png"
            alt="Aseptic fruit pulp, paste and concentrate"
          />

          {/* TEXT */}
          <h2 className="about-products-title">Aseptic</h2>

          <div className="about-products-tags">
            <h3>Pulp • Paste • Concentrate</h3>
          </div>
        </div>
      </div>
    </section>
  );
}