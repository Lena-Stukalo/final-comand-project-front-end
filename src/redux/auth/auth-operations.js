import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/auth";

export const register = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
        console.log("Data in auth-operations: " + JSON.stringify(data));

        try {
            const result = await api.signup(data);
            return result;
        } catch ({ response }) {
            const { status, data } = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        };
    }
);