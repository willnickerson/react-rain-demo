import React, { Component } from 'react';
import RainComponent from 'react-rain-animation';
import logo from './assets/coffee-cup-white.svg';
import './App.css';
import 'react-rain-animation/lib/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react-rain-animation demo</h2>
        </div>
        <RainComponent/>
      </div>
    );
  }
}

export default App;
