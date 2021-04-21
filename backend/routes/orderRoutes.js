import express from "express";
import { checkoutOrder } from "../controllers/OrderController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/checkout-sessions", checkoutOrder);

export default router;
