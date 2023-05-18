import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running");
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`app listening on ${PORT} in ${process.env.NODE_ENV}`)
);
