import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../../hooks/useCart';
import { removeFromDb } from '../../../utilities/localDB';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  const [cart, setCart] = useCart();
  const history = useHistory();

  const handelRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handleClick = () => {
    history.push('/shipping');
  };

  return (
    <div className='shop__container container'>
      <div className='product__container'>
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handelRemove={handelRemove}
          />
        ))}
      </div>
      <aside className='cart__container'>
        <Cart cart={cart} text='Proceed to Shipping' click={handleClick} />
      </aside>
    </div>
  );
};

export default OrderReview;
