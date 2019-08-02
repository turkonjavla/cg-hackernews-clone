import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* MUI Components */
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

/* Components */
import ArticleList from '../ArticleList/ArticleList';
import LoadingComponent from '../../../app/layout/LoadingComponent';

/* Actions */
import { loadArticles } from '../articleActions';

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }
});

class ArticleDashboard extends Component {

  componentDidMount() {
    this.props.loadArticles();
  }

  refreshData = () => {
    this.props.loadArticles();
  }

  render() {
    const { classes, loading, articles } = this.props;

    if (loading) return <LoadingComponent />

    return (
      <Container maxWidth="lg">
        <TextField
          id="outlined-search"
          label="Search front page stories"
          className={classes.textField}
          // value={values.search}
          // onChange={handleChange('search')}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Grid container spacing={4} className={classes.mainGrid}>
          <Button
            onClick={this.refreshData}
            disabled={loading}
            fullWidth
            variant="outlined"
          >
            Refresh Data
          </Button>
          <ArticleList articles={articles} />
        </Grid>
      </Container>
    )
  }
}

ArticleDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array
}

const mapStateToProps = state => ({
  loading: state.async.loading,
  articles: state.articles.hits
});

const actions = {
  loadArticles
}

export default compose(
  connect(mapStateToProps, actions),
  withStyles(styles)
)(ArticleDashboard);