import React, { Component } from 'react';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Waha
        </div>
        <div>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
