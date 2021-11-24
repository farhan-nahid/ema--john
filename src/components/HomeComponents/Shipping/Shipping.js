import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../../utilities/localDB';
import './Shipping.css';

const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loggedInUser } = useAuth();
  const savedCart = getStoredCart();

  const onSubmit = (data) => {
    data.cart = savedCart;
    const loading = toast.loading('Processing Your Order..!!!');
    axios.post('http://localhost:5000/orders', data).then((res) => {
      toast.dismiss(loading);
      toast.success('Order Process Successfully');
      reset();
      clearTheCart();
    });
  };

  return (
    <form className='shipping__form' onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={loggedInUser.displayName} {...register('name')} />
      <input
        defaultValue={loggedInUser.email}
        {...register('email', { required: true })}
      />
      {errors.email && <span className='error'>This field is required</span>}
      <input placeholder='Address' defaultValue='' {...register('address')} />
      <input placeholder='City' defaultValue='' {...register('city')} />
      <input
        placeholder='phone number'
        defaultValue=''
        {...register('phone')}
      />
      <input type='submit' />
    </form>
  );
};

export default Shipping;
