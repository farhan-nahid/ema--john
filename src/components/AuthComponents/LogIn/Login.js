import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_URI = location.state?.from || '/home';

  const handleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => history.push(redirect_URI));
  };

  return (
    <section className='login__register__form container'>
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email Address'
          />
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password'
          />
          <input type='submit' value='Log In' />
        </form>
        <p>
          New to Ema John ? <Link to='/register'>Register</Link>
        </p>
        <h3>------------------- OR -------------------</h3>
        <button onClick={handleGoogleLogIn}>Google Sign In</button>
      </div>
    </section>
  );
};

export default Login;
