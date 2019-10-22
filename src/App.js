import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import ProductPage from "./components/productPage";
import Checkout from "./components/checkout";
import auth from "./auth";

import "./App.css";

class App extends Component {
  componentWillMount() {
    auth.getToken();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/home" component={ProductPage} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
