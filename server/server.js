const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/users");
const blogRoutes = require("./routes/blogs");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/public")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
