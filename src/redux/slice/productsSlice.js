import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsApi from "../../api/productsApi";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const currentProducts = await productsApi.getProducts();
  return currentProducts;
});

export const getProductsHome = createAsyncThunk("getProductsHome", async () => {
  const currentProductsHome = await productsApi.getProductsHome();
  return currentProductsHome;
});

export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (productId) => {
    const currentProductDetail = await productsApi.getProductDetail(productId);
    return currentProductDetail;
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    productDetail: [],
    loading: false,
    error: "",
  },
  reducers: {
    getProductDetailEmpty: (state, action) => {
      state.productDetail = [];
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },

    [getProducts.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [getProductsHome.pending]: (state) => {
      state.loading = true;
    },

    [getProductsHome.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getProductsHome.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },

    [getProductDetail.pending]: (state) => {
      state.loading = true;
    },

    [getProductDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getProductDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.productDetail.push(action.payload);
    },
  },
});

const { reducer: productsReducer, actions } = productsSlice;
export const { getProductDetailEmpty } = actions;
export default productsReducer;
