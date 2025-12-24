// src/components/Strengths.jsx
import React, { useEffect, useRef } from "react";

export default function Strengths() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // One-time reveal observer (adds 'visible' then unobserves)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    cardsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const setRef = (el, i) => (cardsRef.current[i] = el);

  const strengths = [
    { title: "Global Exports", desc: "Supplying to 20+ countries with reliable logistics." },
    { title: "Food Safety", desc: "ISO 22000 & HACCP certified manufacturing." },
    { title: "Aseptic Packaging", desc: "Long shelf-life without preservatives." },
    { title: "Cold Chain", desc: "IQF & controlled cold chain for freshness." },
    { title: "Traceability", desc: "Batch-level traceability from farm to factory." },
    { title: "Sustainable Farming", desc: "Farm partnerships & reduced water usage." },
  ];

  return (
    <section className="section strengths-section" aria-label="Our strengths">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-sub">Built for quality, safety and reliable global supply.</p>

        <div className="strengths-grid" role="list" aria-hidden="false">
          {strengths.map((s, i) => (
            <div
              key={i}
              role="listitem"
              ref={(el) => setRef(el, i)}
              className={`strength-card float-card card-${(i % 6) + 1} reveal-strength`}
              aria-label={s.title + " — " + s.desc}
            >
              <div className="strength-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
