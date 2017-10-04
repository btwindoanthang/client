import {combineReducers} from 'redux';
import auth from './auth';
import todos from './todos';
import appData from './dataReducers';


const allReducers = combineReducers({
    auth,
    todos,
    appData
});

export default allReducers;