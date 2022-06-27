import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import oderReducer from './oderReducer';

const rootReducer = combineReducers({
  ...userReducer,
  ...cartReducer,
  ...oderReducer,
});

export default rootReducer;
