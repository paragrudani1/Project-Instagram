/** @format */


const commentPost = require("./src/commentPost.js");
const followUserByPost = require("./src/followUserByPost.js");
const getFollowing = require("./src/getFollowing.js");
const getInbox = require("./src/getInbox.js");
const getMediaIdInfo = require("./src/getMediaIdInfo.js");
const getMediaType = require("./src/getMediaType.js");
const getCommentsOnPostById = require("./src/getPostCommentsById.js");
/** @format */

const getUserRecentPosts = require("./src/getUserRecentPosts.js");
const readFollowing = require("./src/readFollowing.js");
const recentHashtagList = require("./src/recentHashtagList.js");
const recentLocationList = require("./src/recentLocationList.js");
const removeCookie = require("./src/removeCookie.js");
const requestLivestream = require("./src/requestLivestream.js");
const unfollowById = require("./src/unfollowById.js");
const unfollowUser = require("./src/unfollowUser.js");

require("./src/tools-for-instagram.js");

(async () => {
  let ig = await login();

  
  let count = 0;
  setInterval(async () => {
    await followUserByPost(ig, posts[count]);
    count++;
  }, 12000);
})();
