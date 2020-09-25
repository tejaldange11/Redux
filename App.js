import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import AuthScreen from './src/screns/AuthScreen';
import Navigation from './src/Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, myStore} from './src/redux/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}