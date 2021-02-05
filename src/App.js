import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Servicos from './pages/Servicos/Servicos';
import Spa from './pages/Spa/Spa';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/servicos" component={Servicos} />
      <Route exact path="/spa" component={Spa} />

    </Switch>
  </BrowserRouter>
);

export default App;
