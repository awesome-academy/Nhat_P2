import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsApi from "../../api/productsApi";

export const postProduct = createAsyncThunk("postProduct", async (product) => {
  const currentPostProduct = await productsApi.postProduct(product);
  return currentPostProduct;
});

export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (productId) => {
    const currentGetProductDetail = await productsApi.getProductDetail(
      productId
    );
    return currentGetProductDetail;
  }
);

export const putProduct = createAsyncThunk(
  "putProduct",
  async ({ productId, product }) => {
    const currentPutProduct = await productsApi.putProduct(productId, product);
    return currentPutProduct;
  }
);

const adminProductAddEditSlice = createSlice({
  name: "adminProductAddEditSlice",
  initialState: {
    successError: "",
    loading: false,
    loadingGetMovie: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    // post movie
    [postProduct.pending]: (state) => {
      state.loading = true;
    },

    [postProduct.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postProduct.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // put movie
    [putProduct.pending]: (state) => {
      state.loading = true;
    },

    [putProduct.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [putProduct.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // get movie
    [getProductDetail.pending]: (state) => {
      state.loadingGetUser = true;
    },

    [getProductDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingGetUser = false;
    },

    [getProductDetail.fulfilled]: (state, action) => {
      state.loadingGetUser = false;
      state.loading = false;
    },
  },
});

const { reducer: productAddEditReducer } = adminProductAddEditSlice;
export default productAddEditReducer;
