import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/all-orders')
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Order Page</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{order.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
