import React, { Component } from 'react';
import PictureContainer from './components/PictureContainer.js';
import PictureDetail from './components/PictureDetail.js';
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

          <Switch>
            <Route path='/pictures/:id' render={(routerProps) => {
                  return <PictureDetail/>}}/>

            <Route path='/pictures' render={() => {
                return <div className="App"> <PictureContainer /> </div>}}/>
          </Switch>
      </div>

    );
  }
}

export default App;
