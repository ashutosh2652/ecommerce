import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import AdminProductSlice from "./admin/products-slice";
import ShoppingProductSlice from "./shop/products-slice";
import ShoppingCartSlice from "./shop/cart-slice";
import ShopAddressSlice from "./shop/address-slice";
import ShopOrderSlice from "./shop/order-slice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    ProductsSlice: AdminProductSlice,
    ShoppingSlice: ShoppingProductSlice,
    ShoppingCart: ShoppingCartSlice,
    ShopAddress: ShopAddressSlice,
    ShopOrder: ShopOrderSlice,
  },
});
export default store;
