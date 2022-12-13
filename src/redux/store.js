import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { globalReducer } from './data/globalSlice';
import authReducer from './auth/authSlice';
import transactionReduser from './transactions/transactionSlice';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { globalAddReducer } from 'transactionsRedux/transactionsGlobalSlice';
import { transactionsApi } from 'transactionsRedux/transactionsOperations';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    transactions: transactionReduser,
    auth: persistedReducer,
    global: globalReducer,
    globalAdd: globalAddReducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    transactionsApi.middleware,
  ],
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
