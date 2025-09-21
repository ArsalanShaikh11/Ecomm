import express from "express";
import {
  createPaymentIntent,
  confirmPayment,
  createRefund,
  getPaymentMethods,
  addPaymentMethod,
  removePaymentMethod,
} from "../controllers/paymentController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// All payment routes require authentication
router.use(protect);

router.post("/create-intent", createPaymentIntent);
router.post("/confirm", confirmPayment);
router.post("/refund", createRefund);
router.get("/methods", getPaymentMethods);
router.post("/methods", addPaymentMethod);
router.delete("/methods/:id", removePaymentMethod);

export default router;
