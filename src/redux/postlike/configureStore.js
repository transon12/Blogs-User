import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__({
              shouldHotReload: false,
          })
        : compose;

const configureStore = () => {
    const middleware = [];
    const enhancers = [applyMiddleware(...middleware)];
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    return store;
};

export default configureStore;
