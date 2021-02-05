import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Servicos from './pages/Servicos/Servicos';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/servicos" component={Servicos} />
    </Switch>
  </BrowserRouter>
);

export default App;
