import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/dbConnect.js";
import conectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// App config

const app = express();
const port = process.env.PORT || 4000;

connectDb();
conectCloudinary();

// middlewares

app.use(express.json());
app.use(cors());

// api endpoints

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", async (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}`);
});
