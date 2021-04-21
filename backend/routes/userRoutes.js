import express from "express";

const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/signin", authUser);
router.post("/signup", registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
