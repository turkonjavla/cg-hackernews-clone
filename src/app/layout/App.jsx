import React from 'react';

/* React router */
import { Route, Switch } from 'react-router-dom';

/* MUI Components */
import CSSBaseline from '@material-ui/core/CssBaseline/';

/* Components */
import ArticleDashboard from '../../features/article/ArticleDashboard/ArticleDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import TestComponent from '../../features/testarea/TestComponent';

const App = () => {
  return (
    <div className="App">
      <CSSBaseline />
      <NavBar />
      <Switch>
        <Route exact path="/" component={ArticleDashboard} />
        <Route exact path="/test" component={TestComponent} />
      </Switch>
    </div>
  );
}

export default App;
