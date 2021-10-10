import React from "react";
import "./cart.css";

const Cart = ({ cart }) => {
  let price = 0;
  for (const pd of cart) {
    price = price + pd.price;
  }

  let shipping = 0;
  for (const pd of cart) {
    shipping = shipping + pd.shipping;
  }

  const beforeTax = price + shipping;
  const tax = beforeTax * 0.1;
  const total = beforeTax + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>Items ordered:{cart.length}</h4>
      <p>Items: $ {price.toFixed(2)}</p>
      <p>Shipping & Handling: $ {shipping.toFixed(2)}</p>
      <p>Total before tax: $ {beforeTax.toFixed(2)}</p>
      <p>Estimated Tax: $ {tax.toFixed(2)}</p>
      <h2>Order Total: $ {total.toFixed(2)}</h2>
      <button>Place The Order</button>
    </div>
  );
};

export default Cart;
