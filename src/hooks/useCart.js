import axios from 'axios';
import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/localDB';

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    const keys = Object.keys(savedCart);

    axios
      .post('https://ema--john.herokuapp.com/products/by-keys', keys)
      .then((res) => {
        const products = res.data;
        if (products.length) {
          const savedCart = getStoredCart();
          const storedCart = [];
          for (const key in savedCart) {
            const addedProduct = products.find(
              (product) => product.key === key
            );
            if (addedProduct) {
              // set quantity
              const quantity = savedCart[key];
              addedProduct.quantity = quantity;
              storedCart.push(addedProduct);
            }
          }
          setCart(storedCart);
        }
      });
  }, []);

  return [cart, setCart];
};

export default useCart;
