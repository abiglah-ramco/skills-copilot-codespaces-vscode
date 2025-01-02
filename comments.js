// Create web server with express for comment app
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const comments = [];

app.get("/comments", (req, res) => {
  res.json(comments);
}
);