// import { combineReducers } from 'redux';
// import auth from './reducerData';
 
// const rootReducer = combineReducers({
//     auth
// });
 
// export default rootReducer;

import {combineReducers} from 'redux';
import auth from './reducerData';

const rootReducer = combineReducers({
  auth: auth,
});

export default rootReducer;