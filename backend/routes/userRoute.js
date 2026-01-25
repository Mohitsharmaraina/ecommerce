import express from "express";

import {
  loginUser,
  registerUser,
  adminLogin,
  getCurrentUser,
  updateUserProfile,
} from "../controllers/userController.js";
import authUser from "../middleware.js/auth.js";
import upload from "../middleware.js/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/getUser", authUser, getCurrentUser);
userRouter.put("/update", authUser, upload.single("avatar"), updateUserProfile);

export default userRouter;
