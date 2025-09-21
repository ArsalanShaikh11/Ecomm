import express from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
  getUserOrders,
  cancelOrder,
  getOrderStats,
} from "../controllers/orderController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// Protected routes
router.get("/my-orders", protect, getUserOrders);
router.get("/stats", protect, authorize("admin"), getOrderStats);
router.get("/:id", protect, getOrder);
router.post("/", protect, createOrder);
router.put("/:id/status", protect, authorize("admin"), updateOrderStatus);
router.put("/:id/cancel", protect, cancelOrder);

// Admin routes
router.get("/", protect, authorize("admin"), getOrders);

export default router;
