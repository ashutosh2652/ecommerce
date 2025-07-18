import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
mongoose
  .connect(
    "mongodb+srv://ashutoshkr12652:Ashutosh%40827013@ecommerce-cluster.jemtqxn.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-cluster"
  )
  .then(() => {
    console.log("MONGODB connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
const whitelist = ["http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        // return callback(new Error("Origin Header is required!"));
        return callback(null, true);
      }
      if (whitelist.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS Policy: This origin is not allowed!"));
      }
    },
    allowedHeaders: [
      "Content-Type",
      "Pragma",
      "Cache-Control",
      "Authorization",
      "Expires",
    ],
    credentials: true,
    methods: ["GET", "DELETE", "POST", "PUT"],
  })
);
app.use(cookieParser());
app.use(express.json());

import AuthRouter from "./routes/auth/auth-routes.js";
app.use("/api/auth", AuthRouter);
import AdminProductRoutes from "./routes/admin/product-routes.js";
app.use("/api/admin/products", AdminProductRoutes);
import ShopProductRoutes from "./routes/shop/products-routes.js";
app.use("/api/shop/products", ShopProductRoutes);
import CartProductRoutes from "./routes/shop/cart-routes.js";
app.use("/api/shop/cart", CartProductRoutes);
import CustomerAddressRoutes from "./routes/shop/address-routes.js";
app.use("/api/shop/address", CustomerAddressRoutes);
import CustomerOrderRoutes from "./routes/shop/order-routes.js";
app.use("/api/shop/order", CustomerOrderRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening to port:${PORT}`));
