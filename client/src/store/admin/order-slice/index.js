import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  OrderList: [],
  OrderDetail: null,
};
export const getAllOrderOfAllUser = createAsyncThunk(
  "/admin/getAllOrderOfAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/order/list`
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getOrderDetails = createAsyncThunk(
  "/admin/getOrderDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/order/details/${id}`
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
const AdminOrderSlice = createSlice({
  name: "AdminOrderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrderOfAllUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrderOfAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.OrderList = action.payload.data;
      })
      .addCase(getAllOrderOfAllUser.rejected, (state) => {
        state.isLoading = false;
        state.OrderList = [];
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.OrderDetail = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.OrderDetail = null;
      });
  },
});
export default AdminOrderSlice.reducer;
