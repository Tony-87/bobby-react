import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {count:0}
  this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>{this.state.count}</div>
          <button onClick={this.handleClick}>update</button>
        </header>
      </div>
    );
  }
}

export default App;
