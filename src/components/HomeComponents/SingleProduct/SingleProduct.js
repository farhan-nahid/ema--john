import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './singleProduct.css';

const SingleProduct = ({ product, handleAddToCart }) => {
  const { url, name, img, seller, price, star, stock, features } = product;

  return (
    <div className='product__card'>
      <div>
        <img src={img} alt={name} />
      </div>
      <div className='product__details'>
        <a href={url} target='_blank' rel='noreferrer'>
          {' '}
          <h4>{name}</h4>
        </a>
        <p>By: {seller}</p>
        <div className='product__card__grid'>
          <div>
            <p>Price: ${price}</p>
            <h6>only {stock} left in stock - order soon</h6>
            <button onClick={() => handleAddToCart(product)}>
              <span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>{' '}
              Add To Cart
            </button>
          </div>
          <div>
            <Rating
              initialRating={star}
              readonly
              emptySymbol={
                <FontAwesomeIcon icon={faStar} className='star__none' />
              }
              fullSymbol={
                <FontAwesomeIcon icon={faStar} className='star__display' />
              }
            />
            <h4>Features</h4>
            <ul>
              {
                // map all features data
                features.map((feature, idx) => (
                  <li key={idx}>
                    {feature.description ? feature.description : ''}{' '}
                    <strong>{feature.value ? feature.value : ''}</strong>{' '}
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
