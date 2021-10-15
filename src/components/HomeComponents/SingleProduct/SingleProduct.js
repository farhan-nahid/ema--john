import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./singleProduct.css";

const SingleProduct = ({ product, handleAddToCart }) => {
  const { url, name, img, seller, price, star, stock, features } = product;

  return (
    <div className="product__card">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="product__details">
        <a href={url} target="blank">
          {" "}
          <h4>{name}</h4>
        </a>
        <p>By: {seller}</p>
        <div className="product__card__grid">
          <div>
            <p>Price: ${price}</p>
            <h6>only {stock} left in stock - order soon</h6>
            <button onClick={() => handleAddToCart(product)}>
              <span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>{" "}
              Add To Cart
            </button>
          </div>
          <div>
            {star}
            <h4>Features</h4>
            <ul>
              {
                // map all features data
                features.map((feature, idx) => (
                  <li key={idx}>
                    {feature.description ? feature.description : ""}{" "}
                    <strong>{feature.value ? feature.value : ""}</strong>{" "}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
