import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    userId: String,
    cartId: String,
    cartItems: [
      {
        productId: String,
        title: String,
        image: String,
        salePrice: String,
        quantity: Number,
      },
    ],
    addressInfo: {
      addressId: String,
      address: String,
      state: String,
      city: String,
      pincode: String,
      phone: String,
      notes: String,
    },
    orderStatus: String,
    paymentMethod: String,
    paymentStatus: String,
    totalAmount: Number,
    orderDate: Date,
    orderUpdateDate: Date,
    paymentId: String,
    payerId: String,
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", OrderSchema);
