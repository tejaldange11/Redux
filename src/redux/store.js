// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { persistStore, persistReducer } from 'redux-persist';
// //import AsyncStorage from '@react-native-community/async-storage';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


// // let store = createStore(rootReducer);
 
// // export default store;

// const persistConfig = {
//     key: 'root',
//     // storage: AsyncStorage,
//     storage,
    
//   }
//   const persistedReducer = persistReducer(persistConfig, rootReducer)
   
//   export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }


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