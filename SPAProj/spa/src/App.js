import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Movie from './Components/Movie';
import AddMovie from './Components/AddMovie';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/movies' component={ Home }/>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/movies/add-movie' component={ AddMovie }/>
          <Route exact path='/movies/:id' component={ Movie }/>
          
        </Switch>
      </div>
    );
  }
}

export default App;
