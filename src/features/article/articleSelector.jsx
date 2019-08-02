import { createSelector } from 'reselect';

const getArticlesSelector = state => state.articles.data.hits;
const getSortKeySelector = state => state.articles.sortKey;
const getSortDirectionSelector = state => state.articles.sortDirection;

export const getSortedArticlesSelector = createSelector(
  getArticlesSelector,
  getSortKeySelector,
  getSortDirectionSelector,
  (articles, sortKey, sortDirection) => {
    /* date sorting */
    if (sortKey === 'created_at' && sortDirection === 'asc') {
      return articles.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    }
    else if (sortKey === 'created_at' && sortDirection === 'desc') {
      return articles.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    }

    /* alphabetical sorting */
    else if (sortKey === 'title' && sortDirection === 'asc') {
      return articles.slice().sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase())
    }
    else if (sortKey === 'title' && sortDirection === 'desc') {
      return articles.slice().sort((a, b) => b.title.toLowerCase() < a.title.toLowerCase())
    }
    else {
      return articles;
    }
  }
);