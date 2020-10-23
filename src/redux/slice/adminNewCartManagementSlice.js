import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newCartApi from "../../api/newCartApi";

export const getNewCart = createAsyncThunk("getNewCart", async () => {
  const currentNewCart = await newCartApi.getNewCart();
  return currentNewCart;
});

const adminNewCartManagementSlice = createSlice({
  name: "adminNewCartManagementSlice",
  initialState: {
    listNewCart: [],
    loading: false,
    error: "",
  },
  reducers: {
    // removeTicket: (state, action) => {
    //   const removeTicketId = action.payload;
    //   state.tickets = state.tickets.filter((e) => e.id !== removeTicketId);
    // },
  },
  extraReducers: {
    [getNewCart.pending]: (state) => {
      state.loading = true;
    },

    [getNewCart.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getNewCart.fulfilled]: (state, action) => {
      state.listNewCart = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: newCartReducer } = adminNewCartManagementSlice;
// export const { removeTicket } = actions;
export default newCartReducer;
