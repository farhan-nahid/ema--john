import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import useCart from '../../../hooks/useCart';
import { addToDb } from '../../../utilities/localDB';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './shop.css';

const Shop = () => {
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const size = 10;

  const handleAddToCart = (product) => {
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
      .get(
        `https://ema--john.herokuapp.com/products?page=${page}&&size=${size}`
      )
      .then((res) => {
        setFilteredProduct(res.data.products);
        setProducts(res.data.products);
        setPageCount(Math.ceil(res.data.count / size));
      })
      .catch((err) => toast.error('Something Went Wrong'));
  }, [page]);

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

          <div className='pagination'>
            {[...Array(pageCount).keys()].map((num) => (
              <button
                className={num === page ? 'selected' : ''}
                key={num}
                onClick={() => setPage(num)}
              >
                {num + 1}
              </button>
            ))}
          </div>
        </div>
        <aside className='cart__container'>
          <Cart cart={cart} text='Review Your Order' click={handleClick} />
        </aside>
      </section>
    </>
  );
};

export default Shop;
