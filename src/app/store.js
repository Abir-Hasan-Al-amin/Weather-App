import { configureStore } from '@reduxjs/toolkit';
import weatherData from '../features/weatherDataSlice';

export const store = configureStore({
  reducer: {
    curData: weatherData,
  },
});
