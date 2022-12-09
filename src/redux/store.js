import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/auth-slice';
import { globalReducer } from './data/globalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalReducer,
  }
});

