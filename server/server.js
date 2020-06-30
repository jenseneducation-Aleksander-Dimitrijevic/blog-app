const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/users");
const blogRoutes = require("./routes/blogs");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
