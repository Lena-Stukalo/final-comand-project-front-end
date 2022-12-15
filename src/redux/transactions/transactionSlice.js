import { createSlice } from '@reduxjs/toolkit';
import operations from './transactionsOperations';
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: [],
    categories: [],
    details: [],
    isLoading: false,
    error: null,
    isAddTransactionModalOpen: false,
  },
  reducers: {
    toggleAddModal: (state, _) => {
      state.isAddTransactionModalOpen = !state.isAddTransactionModalOpen;
    },
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
    [operations.fetchTransactions.pending](state) {
      state.isLoading = true;
    },
    [operations.fetchTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    [operations.fetchTransactions.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [operations.addTransactions.pending](state) {
      state.error = false;
      state.isLoading = true;
    },
    [operations.addTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
      state.isAddTransactionModalOpen = false;
      state.data = [action.payload, ...state.data];
    },
    [operations.addTransactions.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default transactionsSlice.reducer;
export const { toggleAddModal } = transactionsSlice.actions;
