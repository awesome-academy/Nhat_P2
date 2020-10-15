import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sliderApi from "../../api/sliderApi";

export const getSlider = createAsyncThunk("getSlider", async () => {
  const currentSlider = await sliderApi.getSlider();
  return currentSlider;
});

const sliderSlice = createSlice({
  name: "sliderSlice",
  initialState: {
    slider: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getSlider.pending]: (state) => {
      state.loading = true;
    },

    [getSlider.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getSlider.fulfilled]: (state, action) => {
      state.slider = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: sliderReducer } = sliderSlice;
export default sliderReducer;
