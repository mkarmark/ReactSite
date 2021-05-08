import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Home from './Home';
import IceCreamPreferences from './IceCreamPreferences';
import SubmitIceCreamPreference from './SubmitIceCreamPreference';
import ShoppingList from './ShoppingList';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route path="/" component={IceCreamPreferences} exact/>
          <Route path="/vote" component={SubmitIceCreamPreference} exact/>
          <Route path="/shoppingList/" component={ShoppingList}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
