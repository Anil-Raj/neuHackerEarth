import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import AppRouter from './AppRouter';

class App extends Component {

  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
