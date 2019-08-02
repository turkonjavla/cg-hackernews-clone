import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export const configureStore = preloadedState => {
  
  // middlewares
  const middlewares = [thunk];
  const middlewareEnchancer = applyMiddleware(...middlewares);

  // enchancers
  const storeEnchancers = [middlewareEnchancer];
  const composedEnchancer = composeWithDevTools(...storeEnchancers);

  // store
  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnchancer
  );

  // hot module reload for redux
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      })
    }
  }

  return store;
}