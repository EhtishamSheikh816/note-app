import jwt from "jsonwebtoken";

const tokenVerification = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided. Authorization denied.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;

    next();
  } catch (err) {
    if (err.name == "TokenExpiredError") {
      res.clearCookie("token");
      return res.status(401).json({
        success: false,
        message: "Token expired. Please login again.",
      });
    }
    res.status(401).json({
      success: false,
      message: "Invalid token.",
      error: err.message,
    });
  }
};

export default tokenVerification;
