import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import Header from "./components/header/header.component"
import {Route, Switch} from "react-router-dom";
import {auth} from "./firebase/firebase.utils";
// import { render } from '@testing-library/react';


class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser: null
  }
}

unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
    this.setState({currentUser: user});
    console.log(user);
  });

}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
