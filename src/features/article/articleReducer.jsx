import { createReducer } from '../../app/common/util/reducerUtil';
import { FETCH_ARTICLES } from './articleConstants';

const initialState = [];

export const fetchArticles = (state, payload) => {
  return payload.articles
}

export default createReducer(initialState, {
  [FETCH_ARTICLES]: fetchArticles
});