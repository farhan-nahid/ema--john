import React from 'react';
import useCart from '../../../hooks/useCart';
import useProduct from '../../../hooks/useProduct';
import { removeFromDb } from '../../../utilities/localDB';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  const [products] = useProduct();
  const [cart, setCart] = useCart(products);

  const handelRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
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
        <Cart cart={cart} />
      </aside>
    </div>
  );
};

export default OrderReview;
