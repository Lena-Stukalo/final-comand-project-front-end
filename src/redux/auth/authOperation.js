import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/auth';

axios.defaults.baseURL =
  'https://final-comand-project-back-end-production.up.railway.app/api';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const result = await api.signup(credentials);
    const { data } = await axios.post('/auth/register', result);
    token.set(data.token);
    return data;
  } catch (error) {}
});
const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});
const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.get('/auth/logout');
    token.set(data.token);
    return data;
  } catch (error) {}
});
const currentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/auth/current');
    return data;
  } catch (error) {}
});

const operations = {
  register,
  login,
  logout,
  currentUser,
};
export default operations;
