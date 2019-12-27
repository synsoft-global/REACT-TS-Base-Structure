import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import reducer, { IStoreState } from 'src/redux/reducers';
import { AnyAction } from 'redux';
// add thunk as middleware via an enhancer
const middleware = [thunk as ThunkMiddleware<IStoreState, AnyAction>];
// any additional store enhancers
const enhancers = [] as any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  // root reducer
  persistedReducer,
  // initial state. We set this in each reducer, so we can pass {} here
  {},
  // applyMiddleware(thunk)
  // store enhancer. Only enhancer that ships with redux is applyMiddleware()
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

export const persistor = persistStore(store);