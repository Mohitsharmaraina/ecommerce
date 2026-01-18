import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const rawToken = req.headers.authorization;
    if (!rawToken) {
      return res.json({ success: false, message: "Not authorized (no token)" });
    }
    const token = rawToken.split(" ")[1];
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not authorized got token" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export default adminAuth;
