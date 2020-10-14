import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import Header from "./components/header/header.component"
import {Route, Switch} from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
 
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
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
            
          }
        });
        // console.log(this.state);
      }); //onSnapshot ends
      
    } else{
      this.setState({currentUser: userAuth});
    }
    
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
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
