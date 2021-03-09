import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Languages from './components/Languages';
import Vocabulary from './components/Vocabulary';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  return (
    <>
      {/* <Loading /> */}
      <Router>
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
