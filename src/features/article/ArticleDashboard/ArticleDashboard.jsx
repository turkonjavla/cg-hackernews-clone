import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* MUI Components */
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/* Components */
import ArticleList from '../ArticleList/ArticleList';

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }
});

class ArticleDashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <Grid container spacing={4} className={classes.mainGrid}>
          <ArticleList />
        </Grid>
      </Container>
    )
  }
}

ArticleDashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ArticleDashboard);