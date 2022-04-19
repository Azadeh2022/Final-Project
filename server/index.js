const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouts = require("./routes/users");
const authRouts = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connect to MongoDB");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRouts);
app.use("/api/auth", authRouts);
app.use("/api/posts", postRoute);

app.listen(8000, () => {
  console.log("Backend Server is running");
});
