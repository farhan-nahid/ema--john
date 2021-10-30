import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/AuthComponents/LogIn/Login';
import Register from './components/AuthComponents/Register/Register';
import Inventory from './components/HomeComponents/Inventory/Inventory';
import OrderReview from './components/HomeComponents/OrderReview/OrderReview';
import PlaceOrder from './components/HomeComponents/PlaceOrder/PlaceOrder';
import Footer from './components/Shared/Footer/Footer';
import NavBar from './components/Shared/NavBar/NavBar';
import NotFound from './components/Shared/NotFound/NotFound';
import { AuthContext } from './context/AuthProvider';
import Home from './pages/Home';

const App = () => {
  return (
    <AuthContext>
      <Router>
        <Toaster />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/shop' component={Home} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/order-review' component={OrderReview} />
          <Route path='/place-order' component={PlaceOrder} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthContext>
  );
};

export default App;
