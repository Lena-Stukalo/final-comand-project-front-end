import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchApi from "./api"

export const fetchData = createAsyncThunk(
  'global/isLoading',
  async () => {
      const data = await fetchApi();
      
    return data;
  }
);