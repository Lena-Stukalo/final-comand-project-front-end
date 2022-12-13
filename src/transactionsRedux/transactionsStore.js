  // import { configureStore } from '@reduxjs/toolkit';
  // import {
  //   persistStore,
  //   FLUSH,
  //   REHYDRATE,
  //   PAUSE,
  //   PERSIST,
  //   PURGE,
  //   REGISTER,
  // } from 'redux-persist';
  // import { setupListeners } from '@reduxjs/toolkit/query';

  // import { globalReducer } from './transactionsGlobalSlice';
  // import { transactionsApi } from './transactionsOperations';

  // export const store = configureStore({
  //   reducer: {
  //     global: globalReducer,

  //     [transactionsApi.reducerPath]: transactionsApi.reducer,
  //   },
  //   middleware: getDefaultMiddleware => [
  //     ...getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
  //     transactionsApi.middleware,
  //   ],
  // });
  // export const persistor = persistStore(store);

  // setupListeners(store.dispatch);
