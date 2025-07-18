import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  approval_url: null,
  orderId: null,
};
export const createNewOrder = createAsyncThunk(
  "/shop/createNewOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shop/order/create",
        orderData
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.data.message ||
          "Some error occured while creating new order"
      );
    }
  }
);
const ShoppingOrderSlice = createSlice({
  name: "ShoppingOrderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
        state.approval_url = null;
        state.orderId = null;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.approval_url = action.payload.approval_url;
        state.orderId = action.payload.orderId;
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        state.approval_url = null;
        state.orderId = null;
      });
  },
});
export default ShoppingOrderSlice.reducer;
