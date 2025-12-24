// src/components/AsepticInfo.jsx
import React, { useEffect } from "react";

export default function AsepticInfo() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aseptic-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    const section = document.querySelector(".aseptic-info");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section aseptic-info">
      <div className="container">
        <div className="aseptic-inner">
          <span className="aseptic-eyebrow">PROCESS & QUALITY</span>

          <h2 className="aseptic-title">
            What is Aseptic Processing?
          </h2>

          <p className="aseptic-text">
            Aseptic processing is a method in which food products are sterilized
            separately from their packaging and then filled into sterile containers
            under controlled conditions. This process prevents contamination and
            preserves freshness without the use of chemical preservatives.
          </p>

          <p className="aseptic-text">
            By maintaining strict hygiene, temperature control, and sealed
            environments, aseptic processing ensures extended shelf life upto 18 to 20 months,
            consistent quality, and safety — making it ideal for global food
            manufacturing and export.
          </p>
        </div>
      </div>
    </section>
  );
}
