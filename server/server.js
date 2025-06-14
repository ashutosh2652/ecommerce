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
        return callback(new Error("Origin Header is required!"));
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening to port:${PORT}`));
