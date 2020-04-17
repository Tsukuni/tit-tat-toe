import { combineReducers } from 'redux';
import { reducer as position } from './modules/position';
import { reducer as appState } from './modules/appState';

const rootReducer = combineReducers({
  position,
  appState
});

export default rootReducer;
