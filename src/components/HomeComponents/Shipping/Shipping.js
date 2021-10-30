import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loggedInUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
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
