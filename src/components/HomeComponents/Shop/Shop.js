import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import { addToDb, getStoredCart } from '../../../utilities/localDB';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const history = useHistory();

  const handleAddToCart = (product) => {
    // setCart([...cart, product]);
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  useEffect(() => {
    axios
      .get('https://ema--john.herokuapp.com/products')
      .then((res) => {
        setFilteredProduct(res.data);
        setProducts(res.data);
      })
      .catch((err) => toast.error('Something Went Wrong'));
  }, [filteredProduct]);

  useEffect(() => {
    if (products.length) {
      const storedCart = getStoredCart();
      const storedProduct = [];
      for (const key in storedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = storedCart[key];
          addedProduct.quantity = quantity;
          storedProduct.push(addedProduct);
        }
      }
      setCart(storedProduct);
    }
  }, [products, filteredProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      const searchProduct = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      if (searchProduct.length) {
        setFilteredProduct(searchProduct);
      } else {
        toast.error('This Product is not Available!!');
      }
    }
  };

  const handleClick = () => {
    history.push('/order-review');
  };

  return (
    <>
      <form className='search__container' onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <input
            type='search'
            id='search'
            autoComplete='off'
            spellCheck='false'
            placeholder='Enter a search term'
            onChange={handleChange}
          />
        </label>
      </form>
      <section className='shop__container container'>
        <div className='product__container'>
          {
            // map the data
            filteredProduct.map((pd) => (
              <SingleProduct
                key={pd.key}
                product={pd}
                handleAddToCart={handleAddToCart}
              />
            ))
          }
        </div>
        <aside className='cart__container'>
          <Cart cart={cart} text='Review Your Order' click={handleClick} />
        </aside>
      </section>
    </>
  );
};

export default Shop;
