const express = require("express");
const clothes = require("./clothes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4500;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to my app");
});
app.get("/clothes", (req, res) => {
  res.send(clothes);
});
module.exports = {
  app,
  port,
};
