import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

const categories = createAsyncThunk(
  '/transactions/categories',
  async credentials => {
    try {
      const { data } = await axios.get('/transactions/categories', credentials);
      return data.categories;
    } catch ({ response }) {
      Notify.failure(`${response.status}: ${response.data.message}`);
    }
  }
);
const statistic = createAsyncThunk(
  '/transactions/detailed',
  async credentials => {
    try {
      const { data } = await axios.post('/transactions/detailed', credentials);
      return data;
    } catch ({ response }) {
      Notify.failure(`${response.status}: ${response.data.message}`);
    }
  }
);

const fetchTransactions = createAsyncThunk(
  'transactions/fetch',

  async () => {
    try {
      const { data } = await axios.get('/transactions');
      return data;
    } catch ({ response }) {
      Notify.failure(`${response.status}: ${response.data.message}`);
    }
  }
);

const addTransactions = createAsyncThunk(
  'transactions/add',
  async credentials => {
    try {
      const { data } = await axios.post('/transactions', credentials);
      return data;
    } catch ({ response }) {
      Notify.failure(`${response.status}: ${response.data.message}`);
    }
  }
);

const operations = {
  statistic,
  categories,
  fetchTransactions,
  addTransactions,
};
export default operations;
