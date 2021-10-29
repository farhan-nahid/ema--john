import React, { useEffect, useState } from 'react';
// import { clearTheCart } from '../../../utilities/localDB';
import './cart.css';

const Cart = ({ cart, text, click }) => {
  const [isDisable, setIsDisable] = useState(true);

  let price = 0;
  let shipping = 0;
  let totalQuantity = 0;

  useEffect(() => {
    for (const pd of cart) {
      pd.quantity = !pd.quantity ? 1 : pd.quantity;
    }
  }, [cart]);

  for (const pd of cart) {
    pd.quantity = !pd.quantity ? 1 : pd.quantity;
    price = (price + pd.price) * pd.quantity;
    shipping = shipping + pd.shipping * pd.quantity;
    totalQuantity = totalQuantity + pd.quantity;
  }

  const beforeTax = price + shipping;
  const tax = beforeTax * 0.1;
  const total = beforeTax + tax;

  useEffect(() => {
    if (total > 0) {
      setIsDisable(false);
    }
  }, [total]);

  const handleSubmit = (e) => {
    // clearTheCart();
  };

  return (
    <form className='cart' onSubmit={handleSubmit}>
      <h3>Order Summary</h3>
      <h4>Items ordered:{totalQuantity}</h4>
      <p>Items: $ {price.toFixed(2)}</p>
      <p>Shipping & Handling: $ {shipping.toFixed(2)}</p>
      <p>Total before tax: $ {beforeTax.toFixed(2)}</p>
      <p>Estimated Tax: $ {tax.toFixed(2)}</p>
      <h2>Order Total: $ {total.toFixed(2)}</h2>
      <button disabled={isDisable} type='submit' onClick={click}>
        {text}
      </button>
    </form>
  );
};

export default Cart;
