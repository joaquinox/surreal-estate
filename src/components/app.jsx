import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './add-property';
import '../css/app.css';
import NavBar from './navbar';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </div>
);

export default App;
