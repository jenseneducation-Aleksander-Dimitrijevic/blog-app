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

router.post("/update", auth, async (req, res) => {
  const editBlog = await blog.updateBlog(req.body);
  if (editBlog) {
    res.status(201).json(editBlog);
  } else {
    res.status(400).json({ message: "Post not updated" });
  }
});

router.post("/delete", auth, async (req, res) => {
  const deleteBlog = await blog.deleteBlog(req.body._id);
  if (deleteBlog) {
    res.status(201).json(deleteBlog);
  } else {
    res.status(400).json({ message: "Post not deleted" });
  }
});

module.exports = router;
