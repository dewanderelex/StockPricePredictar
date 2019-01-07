import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Navigation from './Components/Navigation/Navigation'
import About from './Components/About/About'

class App extends Component {
  render() {
    return (
      <div className="body">
        <Navigation />
        <Form symbol = "GE"/>
        <About />
      </div>
    );
  }
}

export default App;
