import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsAPI } from 'services/API';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params, { rejectWithValue }) => {
    const { page } = params;

    try {
      const carsInfo = await getCarsAPI(params);

      return { carsInfo, page };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
