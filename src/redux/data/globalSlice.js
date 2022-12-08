import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const initialState = {
  isLoading: false,
  error: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,

  extraReducers: {
    [fetchData.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [fetchData.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
    },
    [fetchData.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const globalReducer = globalSlice.reducer;
