const express = require("express");
const router = express.Router();
const blog = require("../model/blog");

router.get("/", async (req, res) => {
  const blogs = await blog.all();
  res.status(200).json(blogs);
});

router.post("/", async (req, res) => {
  let newBlog;
  try {
    newBlog = await blog.create(req.body);
    if (newBlog) res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: "Post not created" });
  }
});

module.exports = router;
