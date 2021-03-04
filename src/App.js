import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import Languages from './components/Languages';
import Vocabulary from './components/Vocabulary';
import './App.css';

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Languages />
          </Route>
          <Route path="/lang/:id">
            <Vocabulary />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
