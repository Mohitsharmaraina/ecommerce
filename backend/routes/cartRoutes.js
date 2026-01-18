import express from "express";
import {
  addToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartController.js";
import upload from "../middleware.js/multer.js";
import authUser from "../middleware.js/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.get("/get", authUser, getUserCart);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
