import { combineReducers } from 'redux';

/* Reducers */
import testReducer from '../../features/testarea/testReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
  test: testReducer,
  async: asyncReducer
});

export default rootReducer;