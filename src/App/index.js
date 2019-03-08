import React, { Component } from 'react';
import './App.scss';
import Header from '../Header';
import Greetings from '../Greetings';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Greetings />
      </div>
    );
  }
}

export default App;