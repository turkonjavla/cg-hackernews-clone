import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/* MUI Components */
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  }
})

const ArticleListItem = ({ classes, article }) => {
  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h6">
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {moment(article.created_at).fromNow()}
            </Typography>
            <Typography color="primary" variant="body1">
              Posted by {article.author}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {article.num_comments || 0} comments | {article.points || 0} points
            </Typography>
          </CardContent>
          <CardActions>
            <Button component='a' href={article.url} size="small" color="primary">
              Go to article
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  )
}

ArticleListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired
}

export default withStyles(styles)(ArticleListItem)
