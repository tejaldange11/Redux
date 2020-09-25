import { createStore } from 'redux';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';



// let store = createStore(rootReducer);
 
// export default store;

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   
  export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }