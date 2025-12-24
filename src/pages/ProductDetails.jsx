import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/productsData";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <section className="section product-details-page">
      <div className="container">
        {/* OVERVIEW */}
        <div className="product-overview">
          <img src={product.detailImg} alt={product.title} />
          <div>
            <h1>{product.title}</h1>
            <p style={{ whiteSpace: 'pre-line', color: '#555', lineHeight: '1.6' }}>
              {product.overview}
            </p>
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <div className="product-specs">
          <h2>Product Specification</h2>

          <table>
            <thead>
              <tr>
                <th>Parameter Group</th>
                <th>Range / Value</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(product.specifications).map(
                ([groupName, rows]) => (
                  <React.Fragment key={groupName}>
                    {/* GROUP HEADING */}
                    <tr className="spec-group">
                      <td colSpan="2">{groupName}</td>
                    </tr>

                    {/* ROWS */}
                    {rows.map((row, i) => {
                      // CHECK: Is this the "Packing Details" row?
                      if (row.label === "Packing Details") {
                        return (
                          <tr key={i}>
                            {/* CHANGED: Removed row.label, showing ONLY row.value */}
                            <td colSpan="2">
                              {row.value}
                            </td>
                          </tr>
                        );
                      }

                      // NORMAL ROWS
                      return (
                        <tr key={i}>
                          <td>{row.label}</td>
                          <td>{row.value}</td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}