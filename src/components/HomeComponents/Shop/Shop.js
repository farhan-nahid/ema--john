import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

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
            <SingleProduct
              key={pd.key}
              product={pd}
              handleAddToCart={handleAddToCart}
            />
          ))
        }
      </div>
      <aside className="cart__container">
        <Cart cart={cart} />
      </aside>
    </section>
  );
};

export default Shop;
