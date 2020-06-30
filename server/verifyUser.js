module.exports = {
  auth(req, res, next) {
    const bearer = req.headers["authorization"];
    if (typeof bearer !== "undefined") {
      const bearerHeader = bearer.split(" ");
      const bearerToken = bearerHeader[1];
      req.token = bearerToken;
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  },
};
