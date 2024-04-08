import React from 'react';
import Home from './page/Home/Home';
import Profile from './page/Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
