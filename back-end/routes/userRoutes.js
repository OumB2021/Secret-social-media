import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";
import colors from "colors";

const router = express.Router();

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(400).json({ message: `user ${name} already exists` });
      return;
    }

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user with the hashed password
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      const savedUser = await newUser.save();

      res.status(201).json({
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        password: savedUser.password,
        token: generateToken(savedUser._id),
      });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
);

//login
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({ message: "Password is invalid" });
      }
    } else {
      res.status(401).json({ message: "User not found" });
    }
  })
);

export default router;
