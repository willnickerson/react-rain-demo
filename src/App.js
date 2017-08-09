import React, { Component } from 'react';
// import RainComponent from 'react-rain-animation';
import RainComponent from './components/Rain';
import Knob from 'react-canvas-knob';
import logo from './assets/coffee-cup-white.svg';
import './App.css';
import 'react-rain-animation/lib/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numDrops: 500,
      knobValue: 500
    };
  }

  handleChange = newValue => {
    this.setState({knobValue: newValue});
  }

  onChangeEnd = () => {
    console.log(this.state.numDrops);
    this.setState({numDrops: this.state.knobValue});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react-rain-animation demo</h2>
        </div>
        <RainComponent numDrops={this.state.numDrops}/>

        <Knob className="Knob"
          onChange={this.handleChange}
          onChangeEnd={this.onChangeEnd}
          value={this.state.knobValue}
          min={0}
          max={1000}
          step={1}
        /> 
      </div>
    );
  }
}

export default App;
