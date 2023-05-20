import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();
const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("api running");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`app listening on ${PORT} in ${process.env.NODE_ENV}`)
);
