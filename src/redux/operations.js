import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsAPI } from 'services/API';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params, { rejectWithValue }) => {
    const { page } = params;
    try {
      const cars = await getCarsAPI();
      console.log(cars, page);
      return { cars, page };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
