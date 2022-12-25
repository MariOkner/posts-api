const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.end("Hello from GET router");
});

router.post("/posts", (req, res, next) => {
  res.end("Hello from POST /posts!");
});

module.exports = {
  router,
};
