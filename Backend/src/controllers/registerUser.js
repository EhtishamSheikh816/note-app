import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists! Please login.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, name: newUser.name },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User registered successfully!",
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: err.message });
  }
};

export default registerUser;
