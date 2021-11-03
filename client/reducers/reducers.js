import { combineReducers } from 'redux';
import { compositionsReducer } from './compositionsReducer'

const reducers = combineReducers({
    compositions: compositionsReducer
});

export default reducers;