// var db = require("../models");
var path = require("path");

module.exports = app => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/movie/:movieTitle", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/movie.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
