import { combineReducers } from 'redux'
import filterReducer from './filterReducer';
import todoReducer from './todoReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({filterReducer, todoReducer, themeReducer});

export default rootReducer;
