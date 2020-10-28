/** @format */

const express = require("express");
const { instaLogin } = require("../controller/auth");
const { likeInstagramPost } = require("../controller/likePost");
const router = express.Router();

router.post("/like", instaLogin, likeInstagramPost);
router.post("/comment", instaLogin, likeInstagramPost);

module.exports = router;
