import express from "express";
import {
  getAllOrderOfAllUser,
  getOrderDetailsForAdmin,
} from "../../controllers/admin/order.controller.js";
const router = express.Router();
router.get("/list", getAllOrderOfAllUser);
router.get("/details/:id", getOrderDetailsForAdmin);
export default router;
