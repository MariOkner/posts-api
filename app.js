const express = require('express');
const { router } = require('./router');
// console.log("Let's go");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("Hello, from middleware");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("Another message");
//   next();
// });

app.use('/', router);

module.exports = {
  app,
};
