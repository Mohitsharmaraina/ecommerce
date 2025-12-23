import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/dbConnect.js";

// App config

const app = express();
const port = process.env.PORT || 4000;

connectDb();

// middlewares

app.use(express.json());
app.use(cors());

// api endpoints

app.get("/", async (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on port : http://localhost:${port}`);
});
