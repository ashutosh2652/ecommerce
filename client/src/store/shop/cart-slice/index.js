import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { cartItems: [], isLoading: false };

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, userId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shop/cart/add",
        { userId, productId, quantity }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.data.message || {
          message: "Some error occured while adding to cart",
        }
      );
    }
  }
);
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/shop/cart/get/${userId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.data.message || {
          message: "Some error occured while fetching items from cart",
        }
      );
    }
  }
);
export const updatecartItemQuantity = createAsyncThunk(
  "cart/updatecartItemsquantity",
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/shop/cart/user-cart",
        { userId, productId, quantity }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.data.message || {
          message: "Some error occured while updating cart items",
        }
      );
    }
  }
);
export const deleteCartItems = createAsyncThunk(
  "cart/deleteCartItems",
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/shop/cart/${userId}/${productId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.data.message || {
          message: "Some error occurred while deleting items",
        }
      );
    }
  }
);
const ShoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.cartItems = [];
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.cartItems = [];
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(updatecartItemQuantity.pending, (state) => {
        state.isLoading = true;
        state.cartItems = [];
      })
      .addCase(updatecartItemQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(updatecartItemQuantity.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      })
      .addCase(deleteCartItems.pending, (state) => {
        state.isLoading = true;
        state.cartItems = [];
      })
      .addCase(deleteCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(deleteCartItems.rejected, (state) => {
        state.isLoading = false;
        state.cartItems = [];
      });
  },
});

export default ShoppingCartSlice.reducer;
