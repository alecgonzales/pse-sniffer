import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import stock from './stock';

const Reducers = combineReducers({
    demo,
    stock,
    routing: routerReducer
});

export default Reducers;
