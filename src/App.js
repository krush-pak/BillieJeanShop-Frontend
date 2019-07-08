import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
import ProductPage from "./components/productPage";
import auth from './auth'

import "./App.css";

class App extends Component {

  componentWillMount () {
    auth.getToken()
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <ProductPage />
        </div>
      </Router>
    );
  }
}

export default App;
