import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'transactionsServices/transactionApi';
import { BASE_URL, ROUTES } from 'transactionsComponentConstants/constants';

const { API, TRANSACTIONS } = ROUTES;

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTU5NDMxMjk2YTAwZDcyZjdhM2E0MSIsImlhdCI6MTY3MDc0NzI0MywiZXhwIjoxNjcwODMzNjQzfQ.H5geRVutwDQSFeC7IZjBNnJHkBb4l52L6B7juXFZR7A';

export const transactionsApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL.SERVER,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + TOKEN,
    },
    refetchOnReconnect: true,
  }),

  tagTypes: ['Post'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => ({
        url: `${API}/${TRANSACTIONS}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
    }),

    addTransactions: builder.mutation({
      query: data => ({
        url: `${API}/${TRANSACTIONS}`,
        method: 'POST',
        data,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteTransactions: builder.mutation({
      query: transactionId => ({
        url: `/${API}/${TRANSACTIONS}/${transactionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useAddTransactionsMutation,
  useDeleteTransactionsMutation,
} = transactionsApi;
