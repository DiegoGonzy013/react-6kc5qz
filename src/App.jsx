import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import { MenuItems } from './data/MenuItems';
import Header from './components/Header';

export function App() {
  return (
    <Router>
      <Header />
      {MenuItems.map((item) => {
            return (
                <Route to={item.path}>{item.title}{item.component}</Route>
              );})}
    </Router>
  );
}

export function abc() {
  /*<Route path="/" exact component={Home} />
  <Route path="/listas" component={PaginaListas} />
  <Route path="/perfil" component={Perfil} />*/
}