import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,

  reducers: {
    toggleModal: (store, _) => {
      store.isModalLogoutOpen = !store.isModalLogoutOpen;
    },
  },

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

export const { toggleModal } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
