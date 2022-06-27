import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {AsyncStorage} from 'react-native';


const store = createStore(rootReducer);
export default store;
