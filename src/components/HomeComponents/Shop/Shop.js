import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/farhan-nahid/ema--john/main/src/fakeData/products.JSON"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => {
        toast(err);
        console.log(err);
      });
  }, []);

  return (
    <section className="shop__container">
      <div className="product__container">
        {
          // map the data
          products.map((pd) => (
            <SingleProduct key={pd.key} product={pd} />
          ))
        }
      </div>
      <div className="cart__container">
        <h2>Order Summary</h2>
        <h4>Items ordered:0</h4>
      </div>
    </section>
  );
};

export default Shop;
