const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/goals", (req, res) => {
    res.sendFile(__dirname + "/public/views/works.html");
  });

app.get("/photos", (req, res) => {
res.sendFile(__dirname + "/public/views/photos.html");
});

app.listen(3000, () => {
  console.log("Server is running!");
});