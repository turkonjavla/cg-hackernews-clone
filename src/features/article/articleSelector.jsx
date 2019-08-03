import { createSelector } from 'reselect';

// get specific piece of state from the redux store
const getArticlesSelector = state => state.articles.data.hits;
const getSortKeySelector = state => state.articles.sortKey;
const getSortDirectionSelector = state => state.articles.sortDirection;
const getSearchQuerySelector = state => state.articles.searchQuery;

export const getSortedArticlesSelector = createSelector(
  getArticlesSelector,
  getSortKeySelector,
  getSortDirectionSelector,
  getSearchQuerySelector,
  (articles, sortKey, sortDirection, searchQuery) => {
    /* date sorting with search filter*/
    if (sortKey === 'created_at' && sortDirection === 'asc') {
      return articles
        .slice()
        .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
        .filter(article => article.title.toLowerCase().match(searchQuery.toLowerCase()))
    }
    else if (sortKey === 'created_at' && sortDirection === 'desc') {
      return articles
        .slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .filter(article => article.title.toLowerCase().match(searchQuery.toLowerCase()))
    }

    /* alphabetical sorting with search filter*/
    else if (sortKey === 'title' && sortDirection === 'asc') {
      return articles
        .slice()
        .sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase())
        .filter(article => article.title.toLowerCase().match(searchQuery.toLowerCase()))
    }
    else if (sortKey === 'title' && sortDirection === 'desc') {
      return articles
        .slice()
        .sort((a, b) => b.title.toLowerCase() < a.title.toLowerCase())
        .filter(article => article.title.toLowerCase().match(searchQuery.toLowerCase()))
    }
    else if (searchQuery) {
      return articles
        .filter(article => article.title.toLowerCase().match(searchQuery.toLowerCase()))
    }
    else if (searchQuery === null || searchQuery === undefined || searchQuery === '') {
      return articles;
    }
    else {
      return articles;
    }
  }
);