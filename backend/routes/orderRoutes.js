import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";

import authUser from "../middleware.js/auth.js";
import adminAuth from "../middleware.js/adminAuth.js";

const orderRouter = express.Router();

// admin routes
orderRouter.get("/list", adminAuth, allOrders);
orderRouter.put("/status", adminAuth, updateStatus);

// userRoutes
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);
orderRouter.get("/userOrders", authUser, userOrders);

// verify payment

orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
