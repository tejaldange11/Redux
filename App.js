import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AuthScreen from './src/screns/AuthScreen';
import store from './src/redux/store';
import Navigation from './src/Navigation';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
