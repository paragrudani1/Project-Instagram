/** @format */

const express = require("express");
const { instaLogin } = require("../controller/auth");
const router = express.Router();

router.post("/login", instaLogin);

module.exports = router;
