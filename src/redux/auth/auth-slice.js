import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";

const initialState = {
    user: {},
    isLogin: false,
    token: "",
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [register.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.user = { name: payload.name, email: payload.email };
            store.token = payload.token;
            store.isLogin = true;
        },
        [register.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
    }
})

export default authSlice.reducer;