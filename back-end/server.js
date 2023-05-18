import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import User from "./models/userModel.js";
import generateToken from "./utils/generateToken.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Api is running again");
});

app.post("/", (req, res) => {
  const { name, password } = req.body;
  console.log(req.body);
  res.json("manger");
});

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error(`User ${name} already exists`);
  }

  console.log(req.body);
  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });

    res.redirect("/");
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  res.json({
    email: email,
    password: password,
  });
  console.log(req.body);
  if (user && user.password == password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });

    res.redirect("/");
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//app.use("/api/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`app listening on ${PORT} in ${process.env.NODE_ENV}`)
);
