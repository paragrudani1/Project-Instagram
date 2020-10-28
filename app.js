/** @format */

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("./src/tools-for-instagram.js");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cookieParser());

const likeRoutes = require("./custom/routes/like");
const authRoutes = require("./custom/routes/auth");

const instaId = { username: "inside_codes", password: "parag21195" };

let ig = await login({
  inputLogin: instaId.username,
  inputPassword: instaId.password,
  inputProxy: false,
});

app.use("/api", likeRoutes);
app.use("/api", authRoutes);
// app.get("/", (req, res) => req.cookies())
//PORT
const port = process.env.PORT || 5000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
