import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { authUser, registerUser } from "./controllers/userController.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.post("/api/login", authUser);
app.post("/api/register", registerUser);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`app listening on ${PORT} in ${process.env.NODE_ENV}`)
);
