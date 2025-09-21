import Stripe from "stripe";
import Order from "../models/Order.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// @desc    Create payment intent
// @route   POST /api/payments/create-intent
// @access  Private
export const createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency = "usd", orderId } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid amount is required",
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata: {
        orderId: orderId || "",
        userId: req.user._id.toString(),
      },
    });

    res.json({
      success: true,
      data: {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating payment intent",
      error: error.message,
    });
  }
};

// @desc    Confirm payment
// @route   POST /api/payments/confirm
// @access  Private
export const confirmPayment = async (req, res) => {
  try {
    const { paymentIntentId, orderId } = req.body;

    if (!paymentIntentId) {
      return res.status(400).json({
        success: false,
        message: "Payment intent ID is required",
      });
    }

    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({
        success: false,
        message: "Payment not completed",
      });
    }

    // Update order if orderId is provided
    if (orderId) {
      const order = await Order.findById(orderId);
      if (order) {
        order.isPaid = true;
        order.paidAt = new Date();
        order.paymentResult = {
          id: paymentIntent.id,
          status: paymentIntent.status,
          update_time: new Date().toISOString(),
          email_address: req.user.email,
        };
        await order.save();
      }
    }

    res.json({
      success: true,
      data: {
        paymentIntent,
        message: "Payment confirmed successfully",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error confirming payment",
      error: error.message,
    });
  }
};

// @desc    Create refund
// @route   POST /api/payments/refund
// @access  Private
export const createRefund = async (req, res) => {
  try {
    const {
      paymentIntentId,
      amount,
      reason = "requested_by_customer",
    } = req.body;

    if (!paymentIntentId) {
      return res.status(400).json({
        success: false,
        message: "Payment intent ID is required",
      });
    }

    // Create refund
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount: amount ? Math.round(amount * 100) : undefined, // Convert to cents
      reason,
    });

    // Update order status if order exists
    const order = await Order.findOne({
      "paymentResult.id": paymentIntentId,
    });

    if (order) {
      order.status = "refunded";
      order.refundedAt = new Date();
      order.refundReason = reason;
      await order.save();
    }

    res.json({
      success: true,
      data: refund,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating refund",
      error: error.message,
    });
  }
};

// @desc    Get payment methods
// @route   GET /api/payments/methods
// @access  Private
export const getPaymentMethods = async (req, res) => {
  try {
    // In a real application, you would store customer IDs in your user model
    // For now, we'll return a simple response
    res.json({
      success: true,
      data: {
        methods: [],
        message: "Payment methods feature coming soon",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching payment methods",
      error: error.message,
    });
  }
};

// @desc    Add payment method
// @route   POST /api/payments/methods
// @access  Private
export const addPaymentMethod = async (req, res) => {
  try {
    // In a real application, you would implement this
    res.json({
      success: true,
      message: "Add payment method feature coming soon",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding payment method",
      error: error.message,
    });
  }
};

// @desc    Remove payment method
// @route   DELETE /api/payments/methods/:id
// @access  Private
export const removePaymentMethod = async (req, res) => {
  try {
    // In a real application, you would implement this
    res.json({
      success: true,
      message: "Remove payment method feature coming soon",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error removing payment method",
      error: error.message,
    });
  }
};
