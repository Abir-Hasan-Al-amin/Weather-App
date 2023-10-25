import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentWeather: null,
  forecastData: null,
  loading: "idle",
  error: null,
};

export const fetchCurrentWeatherAndForecast = createAsyncThunk(
  "weather/fetchCurrentWeatherAndForecast",
  async (location) => {
    try {
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bf0a94dd9ee936700536ecc7976b7e8e&units=metric`
      );
      const currentWeatherData = await currentWeatherResponse.json();

      const {
        coord: { lat, lon },
      } = currentWeatherData;

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=82fb9e71920274d8c8db044a5b80e013&units=metric`
      );
      const forecastData = await forecastResponse.json();

      return { currentWeather: currentWeatherData, forecastData };
    } catch (error) {
      throw error;
    }
  }
);

export const curDataSlice = createSlice({
  name: "wData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeatherAndForecast.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCurrentWeatherAndForecast.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.currentWeather = action.payload.currentWeather;
        state.forecastData = action.payload.forecastData;
      })
      .addCase(fetchCurrentWeatherAndForecast.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export default curDataSlice.reducer;
