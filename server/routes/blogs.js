const express = require("express");
const router = express.Router();
const blog = require("../model/blog");
const { auth } = require("../verifyUser");

router.get("/", auth, async (req, res) => {
  const blogs = await blog.getUserBlogs(req.user.userID);
  res.status(200).json(blogs);
});

router.post("/", auth, async (req, res) => {
  let newBlog;
  try {
    newBlog = await blog.create(req.body, req.user.userID);
    if (newBlog) res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: "Post not created" });
  }
});

module.exports = router;
