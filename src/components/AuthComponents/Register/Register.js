import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='login__register__form container'>
      <div>
        <h2>Create an Account</h2>
        <form onSubmit=''>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter Your Full Name...'
          />
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email Address...'
          />
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password...'
          />
          <label htmlFor='checkPassword'>Re-Type Password</label>
          <input
            type='password'
            name='checkPassword'
            id='checkPassword'
            placeholder='Re-type Password...'
          />
          <input type='submit' value='Log In' />
        </form>
        <p>
          Already have an Account ? <Link to='/login'>Log In</Link>
        </p>
        <h3>------------------- OR -------------------</h3>
        <button>Google Sign In</button>
      </div>
    </section>
  );
};

export default Register;
