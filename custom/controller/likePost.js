/** @format */

const getUserInfo = require("../../src/getUserInfo");
const getUserRecentPosts = require("../../src/getUserRecentPosts");
const likePost = require("../../src/likePost");

exports.likeInstagramPost = async (req, res) => {
  console.log(req.ig);
  const posts = await getUserRecentPosts(req.ig, "the_tech_lancers");

  // let count = 0;
  // setInterval(async () => {
  await likePost(req.ig, posts[3]);
  // count++;
  // }, 12000);
  // res.status(200).json(user);
};
