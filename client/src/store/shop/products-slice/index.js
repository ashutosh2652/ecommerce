import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};
export const fetchFilteredProducts = createAsyncThunk(
  "/shop/products/fetchfilteredproducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/products/get"
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data || { message: "Unknown fetch error" }
      );
    }
  }
);
const ShoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.isLoading = true;
        state.productList = [];
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        console.log("fetchFilteredProducts", action.payload);
        state.isLoading = false;
        state.productList = action?.payload?.data;
      })
      .addCase(fetchFilteredProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});
export default ShoppingProductSlice.reducer;
