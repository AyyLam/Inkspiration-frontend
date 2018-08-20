import React, { Component } from 'react';
import PictureContainer from './components/PictureContainer.js';
import Nav from './components/Nav.js';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Whole">
        <Nav />
        <h1>Inkspiration</h1>
        <h3>Where Ideation Becomes Reality</h3>
        <div className="App">
          <PictureContainer />
        </div>
      </div>

    );
  }
}

export default App;
