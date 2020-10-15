import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const currentUser = await userApi.getUser();
  return currentUser;
});

const adminUserManagementSlice = createSlice({
  name: "adminUserManagementSlice",
  initialState: {
    user: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },

    [getUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: userReducer, actions } = adminUserManagementSlice;
export const { removeUser } = actions;
export default userReducer;
