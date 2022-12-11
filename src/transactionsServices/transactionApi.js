import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTU5NDMxMjk2YTAwZDcyZjdhM2E0MSIsImlhdCI6MTY3MDc5MDk1MSwiZXhwIjoxNjcwODc3MzUxfQ.neXOT63t8hi31ICuWdQPVr8K904Ct4z212zF_-SoucA';

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({
        url: `${baseUrl}${url}`,
        method,
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer' + TOKEN,
        },
      });

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
