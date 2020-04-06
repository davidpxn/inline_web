import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/home/Home';
import Signup from './routes/signup/Signup';

import initIcons from './icon';
import './App.scss';


function App() {
  return (
    <div className="app">
      <Helmet defaultTitle="inline" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}


initIcons();
export default App;
