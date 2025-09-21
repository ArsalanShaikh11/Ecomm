import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByCategory,
  searchProducts,
  getRelatedProducts,
  updateProductStock,
} from "../controllers/productController.js";
import { protect, authorize } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// Public routes
router.get("/", getProducts);
router.get("/featured", getFeaturedProducts);
router.get("/search", searchProducts);
router.get("/category/:categoryId", getProductsByCategory);
router.get("/:id", getProduct);
router.get("/:id/related", getRelatedProducts);

// Protected routes (Admin only)
router.post(
  "/",
  protect,
  authorize("admin"),
  upload.array("images", 5),
  createProduct
);
router.put(
  "/:id",
  protect,
  authorize("admin"),
  upload.array("images", 5),
  updateProduct
);
router.delete("/:id", protect, authorize("admin"), deleteProduct);
router.patch("/:id/stock", protect, authorize("admin"), updateProductStock);

export default router;
