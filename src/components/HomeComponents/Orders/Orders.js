import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { loggedInUser } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-orders?email=${loggedInUser.email}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, [loggedInUser]);

  return (
    <section className='container'>
      <h1>Order Page</h1>
      <h3>You have Placed {orders.length}</h3>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.name} {order.email}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Orders;
