import Category from "../models/Category.js";
import Product from "../models/Product.js";
import { cloudinary } from "../utils/cloudinary.js";

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
export const getCategories = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      parent,
      sort = "sortOrder",
      order = "asc",
    } = req.query;

    // Build filter object
    const filter = { isActive: true };

    if (parent !== undefined) {
      filter.parent = parent === "null" ? null : parent;
    }

    // Build sort object
    const sortObj = {};
    sortObj[sort] = order === "desc" ? -1 : 1;

    const categories = await Category.find(filter)
      .populate("parent", "name slug")
      .sort(sortObj)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Category.countDocuments(filter);

    res.json({
      success: true,
      data: categories,
      pagination: {
        current: Number(page),
        pages: Math.ceil(total / limit),
        total,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching categories",
      error: error.message,
    });
  }
};

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
      .populate("parent", "name slug")
      .populate("subcategories");

    if (!category || !category.isActive) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching category",
      error: error.message,
    });
  }
};

// @desc    Create category
// @route   POST /api/categories
// @access  Private/Admin
export const createCategory = async (req, res) => {
  try {
    const {
      name,
      description,
      parent,
      sortOrder,
      metaTitle,
      metaDescription,
      seoKeywords,
    } = req.body;

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category with this name already exists",
      });
    }

    // Handle image upload
    let image = {};
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "ecommerce/categories",
        transformation: [
          { width: 400, height: 300, crop: "fill", quality: "auto" },
        ],
      });
      image = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }

    // Create category
    const category = new Category({
      name,
      description,
      parent: parent || null,
      sortOrder: sortOrder || 0,
      image,
      metaTitle,
      metaDescription,
      seoKeywords: seoKeywords
        ? seoKeywords.split(",").map((keyword) => keyword.trim())
        : [],
    });

    await category.save();

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating category",
      error: error.message,
    });
  }
};

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private/Admin
export const updateCategory = async (req, res) => {
  try {
    const {
      name,
      description,
      parent,
      sortOrder,
      metaTitle,
      metaDescription,
      seoKeywords,
    } = req.body;

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Check if name is being changed and if it already exists
    if (name && name !== category.name) {
      const existingCategory = await Category.findOne({
        name,
        _id: { $ne: category._id },
      });
      if (existingCategory) {
        return res.status(400).json({
          success: false,
          message: "Category with this name already exists",
        });
      }
    }

    // Handle image update
    if (req.file) {
      // Delete old image if exists
      if (category.image && category.image.public_id) {
        await cloudinary.uploader.destroy(category.image.public_id);
      }

      // Upload new image
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "ecommerce/categories",
        transformation: [
          { width: 400, height: 300, crop: "fill", quality: "auto" },
        ],
      });
      category.image = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }

    // Update fields
    if (name) category.name = name;
    if (description) category.description = description;
    if (parent !== undefined) category.parent = parent || null;
    if (sortOrder !== undefined) category.sortOrder = sortOrder;
    if (metaTitle) category.metaTitle = metaTitle;
    if (metaDescription) category.metaDescription = metaDescription;
    if (seoKeywords)
      category.seoKeywords = seoKeywords
        .split(",")
        .map((keyword) => keyword.trim());

    await category.save();

    res.json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating category",
      error: error.message,
    });
  }
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Check if category has products
    const productCount = await Product.countDocuments({
      category: category._id,
    });
    if (productCount > 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete category with existing products",
      });
    }

    // Check if category has subcategories
    const subcategoryCount = await Category.countDocuments({
      parent: category._id,
    });
    if (subcategoryCount > 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete category with existing subcategories",
      });
    }

    // Delete image from Cloudinary if exists
    if (category.image && category.image.public_id) {
      await cloudinary.uploader.destroy(category.image.public_id);
    }

    await Category.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting category",
      error: error.message,
    });
  }
};

// @desc    Get category tree
// @route   GET /api/categories/tree
// @access  Public
export const getCategoryTree = async (req, res) => {
  try {
    const tree = await Category.getCategoryTree();

    res.json({
      success: true,
      data: tree,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching category tree",
      error: error.message,
    });
  }
};
