import { createReducer } from '../../app/common/util/reducerUtil';
import { 
  FETCH_ARTICLES, 
  SET_SORT, 
  SEARCH_ARTICLES 
} from './articleConstants';

const initialState = {
  sortDirection: null,
  sortKey: null,
  searchQuery: null,
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

export const searchArtiles = (state, payload) => {
  return {
    ...state,
    searchQuery: payload
  }
}

export default createReducer(initialState, {
  [FETCH_ARTICLES]: fetchArticles,
  [SEARCH_ARTICLES]: searchArtiles,
  [SET_SORT]: setSort
});