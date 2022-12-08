import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperation';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: true,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperation.logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperation.currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
export default authSlice.reducer;
