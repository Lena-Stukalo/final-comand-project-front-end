import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  isModalDeleteOpen: false,
  isModalAddTransactionOpen: false,
  isNewTransaction: false,
};

const transactionsGlobalSlice = createSlice({
  name: 'globalAdd',
  initialState,
  reducers: {
    openModalLogout: (state, _) => {
      state.isModalLogoutOpen = true;
    },
    openModalDelete: (state, _) => {
      state.isModalDeleteOpen = true;
    },
    openModalAddTransaction: (state, _) => {
      state.isModalAddTransactionOpen = true;
    },
    closeModalWindow: (state, _) => {
      state.isModalLogoutOpen = false;
      state.isModalDeleteOpen = false;
      state.isModalAddTransactionOpen = false;
    },
    addTransactionSuccess: (state, _) => {
      state.isNewTransaction = false;
      state.isModalAddTransactionOpen = false;
    },
    reloadTransactionList: (state, _) => {
      state.isNewTransaction = false;
    },
  },
});

export const {
  openModalLogout,
  openModalDelete,
  openModalAddTransaction,
  closeModalWindow,
  addTransactionSuccess,
  reloadTransactionList,
} = transactionsGlobalSlice.actions;

export const globalAddReducer = transactionsGlobalSlice.reducer;
