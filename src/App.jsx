import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import { Appitems } from './data/Appitems';
import Header from './components/Header';

export function App() {
  return (
    <Router>
      <Header />
      {Appitems.map((item) => {
            return (
              <li key={item.id}>
                <Route to={item.path}>{component.title}</Route>
              </li>
            );
      <Route path="/" exact component={Home} />
      <Route path="/listas" component={PaginaListas} />
      <Route path="/perfil" component={Perfil} />
    </Router>
  );
}

export function abc() {

}