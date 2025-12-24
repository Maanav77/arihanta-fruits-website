// src/components/ProductCard.jsx
import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = forwardRef(({ item, onPreload }, ref) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${item.slug}`);
  };

  const handlePreload = () => {
    if (!item?.detailImg) return;
    const img = new Image();
    img.src = item.detailImg;
  };

  return (
    <article
      ref={ref}
      className="card product-card"
      onClick={handleClick}
      onMouseEnter={handlePreload}
      onTouchStart={handlePreload}
      style={{ cursor: "pointer" }}
      role="button"
      aria-label={`View details for ${item.title}`}
    >
      <div className="card-media">
        <img src={item.cardImg} alt={item.title} />
      </div>

      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </article>
  );
});

export default ProductCard;
