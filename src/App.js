import React, { Component } from 'react';
import RainComponent from 'react-rain-animation';
import Knob from 'react-canvas-knob';
import logo from './assets/coffee-cup-white.svg';
import './App.css';
import 'react-rain-animation/lib/style.css';

const initValue = 25;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numDrops: initValue,
      knobValue: initValue
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
          <a href="http://willnickerson.com/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h2>react-rain-animation demo</h2>
          <ul>
            <li>
              <a href="https://github.com/willnickerson/react-rain-animation">Github repo</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/react-rain-animation">npm</a>
            </li>
            <li>
              <a href="http://willnickerson.com">My website</a>
            </li>
          </ul>
        </div>
        <div className="App-body">
          <p>
            Play with the knob to change the number of drops
          </p>
          <RainComponent numDrops={this.state.numDrops}/>
          <Knob className="Knob"
            onChange={this.handleChange}
            onChangeEnd={this.onChangeEnd}
            value={this.state.knobValue}
            thickness={.07}
            width={125}
            height={125}
            min={0}
            max={1000}
            step={1}
          /> 

        </div>
      </div>
    );
  }
}

export default App;
