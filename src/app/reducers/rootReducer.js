import { combineReducers } from 'redux';

/* Reducers */
import testReducer from '../../features/testarea/testReducer';
import asyncReducer from '../../features/async/asyncReducer';
import articleReducer from '../../features/article/articleReducer';

const rootReducer = combineReducers({
  test: testReducer,
  async: asyncReducer,
  articles: articleReducer
});

export default rootReducer;