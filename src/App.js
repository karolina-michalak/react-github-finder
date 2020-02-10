import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars';
  render() {
    return <div className='App'>{this.foo()}</div>;
  }
}

export default App;
