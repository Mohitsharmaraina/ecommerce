import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate email and password

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "invalid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter a strong 8 digit password",
      });
    }

    // check for existing user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "no user found" });
    }

    // check for password match

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message, status: "catch block" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validate email and password

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "invalid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter a strong 8 digit password",
      });
    }
    // check for existing user
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const { userId } = req.userId;
    const user = await userModel.findById(userId).select("name email");
    return res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.userId;
    const name = req.body.name;
    const email = req.body.email;

    const updateData = { name, email };

    // If user uploaded a file, upload to Cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
        folder: "user_avatars",
      });
      updateData.avatar = result.secure_url;
    }

    // Update user in DB

    const updatedUser = await userModel
      .findByIdAndUpdate(userId, updateData, { new: true })
      .select("name email avatar");

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export {
  loginUser,
  registerUser,
  adminLogin,
  getCurrentUser,
  updateUserProfile,
};
