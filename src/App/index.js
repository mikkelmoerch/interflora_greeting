import React, { Component } from 'react';
import Header from '../Header';
import Greetings from '../Greetings';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Greetings />
      </React.Fragment>
    )
  }
}

export default App