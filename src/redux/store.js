import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/auth-slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});