import { combineReducers } from 'redux';
import logsReducer from './logs/logsSlice';

const rootReducer = combineReducers({
  logs: logsReducer,
});

export default rootReducer;
