import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component"
import {Route, Switch, Link} from "react-router-dom";


function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
