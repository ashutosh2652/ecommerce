import express from "express";
const router = express.Router();
import { fetchFilteredProducts } from "../../controllers/shop/product.controllers.js";
router.get("/get", fetchFilteredProducts);
export default router;
