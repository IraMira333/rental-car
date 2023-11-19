import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';

const initialState = {
  carsInfo: [],
  favoriteCars: [],
  isLoading: false,
  isLastPage: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.isLastPage = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addFavoriteCar(state, action) {
      state.favoriteCars.push(action.payload);
    },
    dellFavoriteCar(state, action) {
      const index = state.favoriteCars.findIndex(
        car => car.id === action.payload.id
      );
      state.favoriteCars.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        if (action.payload.length < 12) state.isLastPage = true;

        state.carsInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.rejected, handleRejected);
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = carSlice.actions;

export const carsReducer = carSlice.reducer;
