import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

/* Redux */
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';

const store = configureStore();

const rootEl = document.getElementById('root');
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootEl
  );
}

// hot module reload 
// auto updates components withour re-rendering
if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  })
}

render();
serviceWorker.unregister();
