import { createSlice } from '@reduxjs/toolkit';
import operations from './transactionsOperations';
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    categories: [],
    details: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [operations.categories.pending](state) {
      state.isLoading = true;
    },
    [operations.categories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    },
    [operations.categories.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [operations.statistic.pending](state) {
      state.isLoading = true;
    },
    [operations.statistic.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.details = action.payload;
    },
    [operations.statistic.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default transactionsSlice.reducer;
