import React from "react";

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/Store';

import { Router, Route, Switch } from "react-router-dom";

import Navigation from './navigation/Navigation'
import Home from './screens/main/Overview'
import Images from "./components/Images/index";
import Profile from './screens/main/Profile'
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

import history from './history';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Navigation />
            <div className="main_wrapper">
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/register" exact component={() => <Register />} />
              <Route path="/profile" exact component={() => <Profile />} />
              <Route path="/rate" exact component={() => <Images />} />
            </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
