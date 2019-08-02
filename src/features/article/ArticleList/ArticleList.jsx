import React from 'react';
import PropTypes from 'prop-types';

/* MUI Components */
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles }) => {
  return (
    <React.Fragment>
      {
        articles && articles.map(article => (
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
  articles: PropTypes.array
}

export default ArticleList;
