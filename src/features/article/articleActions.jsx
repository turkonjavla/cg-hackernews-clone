import axios from 'axios';
import { FETCH_ARTICLES, SET_SORT } from './articleConstants';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from '../async/asyncActions';

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchArticles = articles => {
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
      await delay(800);
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

// sorting
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
      await delay(300);
      dispatch(setSort(sortDirection, sortKey));
      dispatch(asyncActionFinish());
    }
    catch (error) {
      dispatch(asyncActionError());
      console.error(`There was an error, ${error.message}`);
    }
  }
}