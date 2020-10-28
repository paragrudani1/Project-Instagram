/** @format */

var firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyB0NVKAbYbIMo0oJgIDXcUMWfPLthQp7dM",
  authDomain: "instagram-project-68fda.firebaseapp.com",
  databaseURL: "https://instagram-project-68fda.firebaseio.com",
  projectId: "instagram-project-68fda",
  storageBucket: "instagram-project-68fda.appspot.com",
  messagingSenderId: "38750246277",
  appId: "1:38750246277:web:de3ff9ea7168e8d2faa0ec",
  measurementId: "G-679L9KNJ72",
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
