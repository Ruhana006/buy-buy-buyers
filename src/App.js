import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path="/manage">
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path="/products/:_id">
         <Checkout/>
        </PrivateRoute>
        <PrivateRoute path="/checkout">
         <Checkout/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path ="/order">
         <Order/>
        </PrivateRoute>
        <PrivateRoute path ="/productorders">
         <Order/>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
