const express = require("express");
const router = express.Router();
const user = require("../model/user");
const { auth } = require("../verifyUser");

router.post("/register", async (req, res) => {
  const registered = await user.register(req.body);
  if (registered) {
    req.user = registered.email;
    res.status(201).json(registered);
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/dashboard", auth, (req, res) => {
  const isAuth = user.dashboard(req.token);
  if (isAuth) res.json(isAuth);
});

router.post("/login", async (req, res) => {
  const isLoggedIn = await user.login(req.body);
  if (isLoggedIn) {
    res.json(isLoggedIn);
  } else {
    res.status(400).json({ message: "Error while trying to log in" });
  }
});

module.exports = router;
