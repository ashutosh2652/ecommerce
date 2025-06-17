import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import AdminProductSlice from "./admin/products-slice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    ProductsSlice: AdminProductSlice,
  },
});
export default store;
