import {combineReducers, createStore} from 'redux';
import mainReducer from './Modules/Main/Reducers/index';

const store = createStore(
    combineReducers({
        mainReducer,
    })
);

export default store;
