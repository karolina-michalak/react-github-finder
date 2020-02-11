import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
