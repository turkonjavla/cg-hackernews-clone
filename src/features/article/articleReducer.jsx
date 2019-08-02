import { createReducer } from '../../app/common/util/reducerUtil';
import { FETCH_ARTICLES, SET_SORT } from './articleConstants';

const initialState = {
  sortDirection: null,
  sortKey: null,
  data: []
};

export const fetchArticles = (state, payload) => {
  return {
    ...state,
    data: payload
  }
}

export const setSort = (state, payload) => {
  return {
    ...state,
    sortKey: payload.sortKey,
    sortDirection: payload.sortDirection
  }
}

export default createReducer(initialState, {
  [FETCH_ARTICLES]: fetchArticles,
  [SET_SORT]: setSort
});