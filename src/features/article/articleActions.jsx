import axios from 'axios';
import {
  FETCH_ARTICLES,
  SET_SORT,
  SEARCH_ARTICLES
} from './articleConstants';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from '../async/asyncActions';

// fetch articles
const fetchArticles = articles => {
  return {
    type: FETCH_ARTICLES,
    payload: articles
  }
}

export const loadArticles = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());

      // fetch articles from hackernews api with axios
      const res = await axios.get('https://hn.algolia.com/api/v1/search?tags=front_page')
      const articles = await res.data;

      dispatch(fetchArticles(articles))
      dispatch(asyncActionFinish());
    }
    catch (error) {
      dispatch(asyncActionError());
      console.error(`There was an error, ${error.message}`);
    }
  }
}

// sort articles
const setSort = (sortDirection, sortKey) => {
  return {
    type: SET_SORT,
    payload: {
      sortDirection,
      sortKey
    }
  }
}

export const sort = (sortDirection = 'desc', sortKey = 'created_at') => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      dispatch(setSort(sortDirection, sortKey));
      dispatch(asyncActionFinish());
    }
    catch (error) {
      dispatch(asyncActionError());
      console.error(`There was an error, ${error.message}`);
    }
  }
}

// search articles
const setSearchQuery = searchQuery => {
  return {
    type: SEARCH_ARTICLES,
    payload: searchQuery
  }
}

export const searchArticles = (searchQuery = '') => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      dispatch(setSearchQuery(searchQuery));
      dispatch(asyncActionFinish());
    }
    catch (error) {
      dispatch(asyncActionError());
      console.error(`There was an error, ${error.message}`);
    }
  }
}