import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://project-front-end.goit.ua/';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/sign-up', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        return Notify.failure('Validation error');
      }
      if (error.response.status === 409) {
        return Notify.failure('User with such email already exists');
      }
      return rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/sign-in', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        return Notify.failure('Validation error');
      }
      if (error.response.status === 403) {
        return Notify.failure('Provided password is incorrect');
      }
      if (error.response.status === 404) {
        return Notify.failure('User with such email not found');
      }
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete('/api/auth/sign-out');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);