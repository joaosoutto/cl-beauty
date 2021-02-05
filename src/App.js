import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import Bride from './pages/Bride/Bride';
import Courses from './pages/Courses/Courses';
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
      <Route exact path="/dia-de-noiva" component={Bride} />
      <Route exact path="/cursos" component={Courses} />




    </Switch>
  </BrowserRouter>
);

export default App;
