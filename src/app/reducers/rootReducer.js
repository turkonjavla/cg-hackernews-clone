import { combineReducers } from 'redux';

/* Reducers */
import asyncReducer from '../../features/async/asyncReducer';
import articleReducer from '../../features/article/articleReducer';

const rootReducer = combineReducers({
  async: asyncReducer,
  articles: articleReducer
});

export default rootReducer;