import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
