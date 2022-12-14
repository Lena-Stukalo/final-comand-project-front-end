import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperation';
const initialState = {
  user: { name: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
  error: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setBalance(state, action) {
      state.user.balance = action.payload;
    },
  },

  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.register.rejected](state, action) {
      state.error = true;
    },
    [authOperation.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.login.rejected](state, action) {
      state.error = true;
    },
    [authOperation.logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperation.logout.rejected](state, action) {
      state.error = true;
    },
    [authOperation.currentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperation.currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperation.currentUser.rejected](state, action) {
      state.error = true;
      state.isRefreshing = false;
    },
  },
});
export const { setBalance } = authSlice.actions;

export default authSlice.reducer;
