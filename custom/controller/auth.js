/** @format */

const login = require("../../src/login");
const firebase = require("../firebase");

exports.instaLogin = async (req, res, next) => {
  const { username, password } = req.body;

  // let ig = [];

  // ig = await login({
  //   inputLogin: username,
  //   inputPassword: password,
  //   inputProxy: false,
  // });

  const instaId = { username: "inside_codes", password: "parag21195" };

  let ig = await login({
    inputLogin: instaId.username,
    inputPassword: instaId.password,
    inputProxy: false,
  });

  req.ig = ig;
  // JSON.stringify(ig);

  // console.log(ig);
  // res.cookies()

  // firebase
  //   .firestore()
  //   .collection("instagram")
  //   .add({ ig })
  //   .then((data) => console.log("successfully updated!"))
  // .catch((err) => console.log(err));
  // for (let i = 0; i <= ig.length - 1; i++) {
  //   // req.ig[i] = ig[i];

  //   const posts = await getUserRecentPosts(ig[i], "the_tech_lancers");

  //   // let count = 0;
  //   // setInterval(async () => {
  //   await likePost(ig[i], posts[4]);
  // }
  next();
};
