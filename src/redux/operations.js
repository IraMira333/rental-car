import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsAPI } from 'services/API';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params, { rejectWithValue }) => {
    const { page } = params;
    console.log(params);
    try {
      const carsInfo = await getCarsAPI(params);
      console.log(carsInfo);
      return { carsInfo, page };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
