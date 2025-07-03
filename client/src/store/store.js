import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import AdminProductSlice from "./admin/products-slice";
import ShoppingProductSlice from "./shop/products-slice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    ProductsSlice: AdminProductSlice,
    ShoppingSlice: ShoppingProductSlice,
  },
});
export default store;
