import counterReducer from './counter';
import loggedReducer from './isLogged';
import clickerReducer from './clicker';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    counterReducer,
    loggedReducer,
    clickerReducer,
});

export default rootReducers;