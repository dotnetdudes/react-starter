/**
 * Create the store with dynamic reducers
 */

import { createReducer } from './reducers';
import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { loadState } from 'app/utils/persistState';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const persistedState = loadState() || {};

  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware => {
      const middlewares = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            'productList/fetchProductsSuccess',
            'proofOfPurchase/uploadProofOfPurchaseInit',
          ],
        },
      }).concat(sagaMiddleware);
      return middlewares;
    },
    preloadedState: persistedState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  return store;
}
