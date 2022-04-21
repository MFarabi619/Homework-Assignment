const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("Running");
  res.send("This works");
});

app.listen(3000);
