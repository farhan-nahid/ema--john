import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addToDb, getStoredCart } from "../../../utilities/localDB";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToDb(product.key);
  };

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/farhan-nahid/ema--john/main/src/fakeData/products.JSON"
      )
      .then((res) => setProducts(res.data))
      .catch((err) => {
        toast.error(err.massage);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const storedCart = getStoredCart();
      const storedProduct = [];
      for (const keys in storedCart) {
        const addedProduct = products.find((product) => product.key === keys);
        storedProduct.push(addedProduct);
      }
      console.log(storedProduct);
      setCart(storedProduct);
    }
  }, [products]);

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
