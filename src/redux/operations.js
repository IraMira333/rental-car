import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsAPI } from 'services/API';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (_, { rejectWithValue }) => {
    // const { page, mileageFrom, mileageTo, price } = params;
    //console.log(params);
    try {
      const cars = await getCarsAPI();

      return cars;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
