import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({
  product: { name, price, quantity, url, key },
  handelRemove,
}) => {
  return (
    <div className='product__card'>
      <div className='product__details'>
        <a href={url} target='_blank' rel='noreferrer'>
          <h4>{name}</h4>
        </a>
        <p>Price: {price}</p>
        <h4>Quantity: {quantity}</h4>
        <button onClick={() => handelRemove(key)}>Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;
