import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();

  return (
    <div className='not__found'>
      <h1>404</h1>
      <p>Page Not Found</p>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};

export default NotFound;
