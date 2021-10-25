import React from 'react';
import useProduct from '../../../hooks/useProduct';

const OrderReview = () => {
  const [products] = useProduct();
  return <div>{products.length}</div>;
};

export default OrderReview;
