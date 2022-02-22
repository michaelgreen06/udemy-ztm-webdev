import logo from './logo.svg';
import './App.css';
import React from 'react'; //andrei uses destructurring in vid225: import React, {Component} from 'react';

class App extends React.Component { //Andrei has extends Component. doesn't include React
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning to code React and apis. Time AWAY!
            Why isn't it updating in GITHUB?
          </a>
        </header>
      </div>
    );
  }
}

export default App;
