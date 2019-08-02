import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* MUI Components */
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/* Components */
import ArticleList from '../ArticleList/ArticleList';
import LoadingComponent from '../../../app/layout/LoadingComponent';

/* Actions */
import { loadArticles, sort } from '../articleActions';

/* Selectors */
import { getSortedArticlesSelector } from '../articleSelector';


const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class ArticleDashboard extends Component {
  state = {
    searchQuery: '',
    sortKey: '',
    sortDirection: ''
  }

  componentDidMount() {
    this.props.loadArticles();
  }

  refreshData = () => {
    this.props.loadArticles();
    this.setState({
      searchQuery: ''
    })
  }

  // store data from search filed in state
  handleInputChange = e => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  // sorting by date
  handleSortClick = () => {
    const { sortDirection, sortKey } = this.state;
    this.props.sort(sortDirection, sortKey);
    this.setState({
      searchQuery: ''
    })
  }

  handleKeyChange = (e) => {
    this.setState({
      sortKey: e.target.value
    });
  }

  handleDirectionChange = (e) => {
    this.setState({
      sortDirection: e.target.value
    });
  }

  render() {
    const { classes, loading, articles } = this.props;
    const { searchQuery, sortKey, sortDirection } = this.state;

    if (loading) return <LoadingComponent />

    return (
      <Container maxWidth="lg">
        <Grid container>

          {/* search field */}
          <TextField
            label="Search front page stories"
            name="searchQuery"
            onKeyUp={this.handleInputChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />

          {/* sort by field */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="sortKey">Sort by</InputLabel>
            <Select
              value={sortKey}
              onChange={this.handleKeyChange}
              inputProps={{
                name: 'sortKey',
                id: 'sortKey',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="created_at">Date</MenuItem>
              <MenuItem value="title">Title</MenuItem>
            </Select>
          </FormControl>

          {/* sort direction field */}
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="sortDirection">Direction</InputLabel>
            <Select
              value={sortDirection}
              onChange={this.handleDirectionChange}
              inputProps={{
                name: 'sortDirection',
                id: 'sortDirection',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
              <MenuItem value="asc">Ascending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button variant="outlined" onClick={this.handleSortClick}>Apply Filter</Button>
        <Grid container spacing={4} className={classes.mainGrid}>
          <Grid item>
            <Button
              onClick={this.refreshData}
              disabled={loading}
              fullWidth
              variant="outlined"
            >
              Refresh Data
            </Button>
          </Grid>
          <ArticleList
            articles={articles}
            searchQuery={searchQuery}
          />
        </Grid>
      </Container >
    )
  }
}

ArticleDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array,
  loadArticles: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loading: state.async.loading,
  articles: getSortedArticlesSelector(state),
  sortKey: state.articles.sortKey,
  sortDirection: state.articles.sortDirection
});

const actions = {
  loadArticles,
  sort
}

export default compose(
  connect(mapStateToProps, actions),
  withStyles(styles)
)(ArticleDashboard);