import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch, Link} from "react-router-dom";

// Hats component Page
const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}


function App() {
  return (
    <div> 
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
