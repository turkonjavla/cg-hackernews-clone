import React from 'react';
import PropTypes from 'prop-types';

/* MUI Components */

/* Components */
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles, searchQuery }) => {
  return (
    <React.Fragment>
      {
        articles && articles
          // filter articles stored in state based on searchQuery
          .slice()
          .filter(article => {
            return article.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
          })
          .map(article => (
            <ArticleListItem
              key={article.objectID}
              article={article}
            />
          ))
      }
    </React.Fragment>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  searchQuery: PropTypes.string
}

export default ArticleList;
