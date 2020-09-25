import {createStore} from 'redux';
import rootReducer from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const myStore = createStore(persistedReducer);

let persistor = persistStore(myStore);
export {myStore, persistor};