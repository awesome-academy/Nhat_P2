import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const postUser = createAsyncThunk("postUser", async (user) => {
  const currentPostUser = await userApi.postUser(user);
  return currentPostUser;
});

export const getUsers = createAsyncThunk("getUsers", async (userId) => {
  const currentGetUser = await userApi.getUsers(userId);
  return currentGetUser;
});

export const putUser = createAsyncThunk("putUser", async ({ userId, user }) => {
  const currentPutUser = await userApi.putUser(userId, user);
  return currentPutUser;
});

const adminUserAddEditSlice = createSlice({
  name: "adminUserAddEditSlice",
  initialState: {
    successError: "",
    loading: false,
    loadingGetUser: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    // post user
    [postUser.pending]: (state) => {
      state.loading = true;
    },

    [postUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postUser.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // put user
    [putUser.pending]: (state) => {
      state.loading = true;
    },

    [putUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [putUser.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // get user
    [getUsers.pending]: (state) => {
      state.loadingGetUser = true;
    },

    [getUsers.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingGetUser = false;
    },

    [getUsers.fulfilled]: (state, action) => {
      state.loadingGetUser = false;
    },
  },
});

const { reducer: userAddEditReducer } = adminUserAddEditSlice;
// export const { removeUser } = actions;
export default userAddEditReducer;
