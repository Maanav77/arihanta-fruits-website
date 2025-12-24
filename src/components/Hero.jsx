import React, { useEffect } from 'react'

export default function Hero() {

  useEffect(() => {
    const img = document.querySelector('.hero-right img');
    const handleScroll = () => {
      if(img) {
        const y = window.scrollY * 0.05;
        img.style.transform = `translateY(${y}px) scale(1.02)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Removed 'container' from here so background spans full width */
    <div className="hero-bg"> 
      <section className="hero">
        
        {/* ADDED CONTAINER HERE: This applies the 50px padding to content only */}
        <div className="container">
          
          <div className="hero-grid">
            <div className="hero-left">
              <h1>Aseptic Fruit Pulps And Concentrate</h1>
              <p>
                We supply aseptic fruit pulp and concentrates to food manufacturers.
                <br />
                Quality, safety and sustainability at scale.
              </p>
              <div className="hero-ctas">
                <a href="#contact" className="btn-primary">Get a Quote</a>
                <a href="#products" className="btn-outline">View Products</a>
              </div>
            </div>

            <div className="hero-right">
              <img 
                src="/tomatonew.png" 
                alt="fruits" 
              />
            </div>
          </div>
          
        </div> {/* End Container */}
      </section>
   </div>
  )
}