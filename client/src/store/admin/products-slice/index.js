import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  productList: [],
};
export const addNewProducts = createAsyncThunk(
  "/products/addnewproducts",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/products/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data || { message: "Unknown error" }
      );
    }
  }
);
export const editProduct = createAsyncThunk(
  "/products/edit",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/products/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data || { message: "Unknown edit error" }
      );
    }
  }
);
export const deleteProducts = createAsyncThunk(
  "/products/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/products/edit/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data || { message: "Unknown delete Error" }
      );
    }
  }
);
export const fetchAllProducts = createAsyncThunk(
  "/products/fetchproducts",
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
const AdminProductSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action?.payload);
        state.isLoading = false;
        state.productList = action.payload?.data || [];
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});
export default AdminProductSlice.reducer;
