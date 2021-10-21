import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Inventory from "./components/HomeComponents/Inventory/Inventory";
import OrderReview from "./components/HomeComponents/OrderReview/Order";
import Footer from "./components/Shared/Footer/Footer";
import NavBar from "./components/Shared/NavBar/NavBar";
import NotFound from "./components/Shared/NotFound/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Toaster />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/shop" component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/order-review" component={OrderReview} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
