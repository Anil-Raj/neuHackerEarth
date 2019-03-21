import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import AppRouter from './AppRouter';
import { createStore } from 'redux';
import rootReducers from './redux/reducers';
import { Provider } from "react-redux";

class App extends Component {

  render() {
    const store = createStore(rootReducers);
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
