import React, { Component } from 'react';
import PictureContainer from './components/PictureContainer.js';
import PictureDetail from './components/PictureDetail.js';
import Login from './components/Login.js';
import Nav from './components/Nav.js';
import ImageUpload from './components/ImageUpload.js';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-background">
        <Nav />
        <h1 className="App-name">Inkspiration</h1>
        <h3 className="App-slogan">Where Drawings Inspire</h3>
        
          <Switch>
          <Route path="/login" render={() => {
              return <Login />
            }} />
            <Route path='/pictures/:id' render={(routerProps) => {
                  console.log("id: ", routerProps.match.params.id);
                  const id = routerProps.match.params.id
                  return  <PictureDetail id={id}/>}}/>

            <Route path='/pictures' render={() => {
                return <PictureContainer />}}/>
          </Switch>
      </div>

    );
  }
}

export default App;
