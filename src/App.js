import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DetailsState from './DetailsState'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DetailsState/>
      </div>
    );
  }
}

export default App;
