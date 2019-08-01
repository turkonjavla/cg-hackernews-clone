import React from 'react';

/* React router */
import { Route, Switch } from 'react-router-dom';

/* MUI Components */
import CSSBaseline from '@material-ui/core/CssBaseline/';

/* Components */
import ArticleDashboard from '../../features/article/ArticleDashboard/ArticleDashboard';

const App = () => {
  return (
    <div className="App">
      <CSSBaseline />
      <Switch>
        <Route path="/" component={ArticleDashboard} />
      </Switch>
    </div>
  );
}

export default App;
