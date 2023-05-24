import express from "express";
import dotenv from "dotenv";
import Post from "./models/postModel.js";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import asyncHandler from "express-async-handler";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
  })
);

app.post(
  "/",
  asyncHandler(async (req, res) => {
    const { post, userInformation } = req.body;

    const parsedUserInformation = JSON.parse(userInformation);
    const { _id } = JSON.parse(parsedUserInformation);
    console.log(_id);
    try {
      const newPost = new Post({
        user: _id,
        content: post,
      });

      const savedPost = await newPost.save();

      res.status(200).json({
        postId: savedPost._id,
        userId: savedPost.user,
        content: savedPost.content,
        likes: savedPost.likes,
        comments: savedPost.comments,
        commentsCount: savedPost.commentsCount,
        createdSince: savedPost.createdSince,
      });
    } catch (error) {
      res.status(500).json({ error: "Couldn't create post" });
    }
  })
);

app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`app listening on ${PORT} in ${process.env.NODE_ENV}`)
);
