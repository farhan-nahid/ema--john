import React from "react";
import "./singleProduct.css";

const SingleProduct = ({
  product: { name, img, seller, price, star, stock, features },
}) => {
  /* if (features[0].description === undefined) {
    return;
  }

  if (features[1].description === undefined) {
    return;
  }

  if (features[2].description === undefined) {
    return;
  }

  if (features[3].description === undefined) {
    return;
  }

  if (features[4].description === undefined) {
    return;
  } */

  return (
    <div className="product__card">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="product__details">
        <h4>{name}</h4>
        <p>By: {seller}</p>
        <div className="product__card__grid">
          <div>
            <p>Price: ${price}</p>
            <h6>only {stock} left in stock - order soon</h6>
            <button>Add To Cart</button>
          </div>
          <div>
            {star}
            <h4>Features</h4>
            <ul>
              <li>
                {features[0]?.description} <strong>{features[0]?.value}</strong>{" "}
              </li>
              <li>
                {features[1]?.description} <strong>{features[1]?.value}</strong>{" "}
              </li>
              <li>
                {features[2]?.description} <strong>{features[2]?.value}</strong>{" "}
              </li>
              <li>
                {features[3]?.description} <strong>{features[3]?.value}</strong>{" "}
              </li>
              <li>
                {features[4]?.description} <strong>{features[4]?.value}</strong>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
