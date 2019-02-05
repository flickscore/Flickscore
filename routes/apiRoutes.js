var db = require("../models");

module.exports = app => {
  // // Get all examples
  // app.get("/api/examples", (req, res) => {
  //   db.Flickscore.findAll({}).then(dbFlickscore => {
  //     res.json(dbFlickscore);
  //   });
  // });

  // Create a new movie title & movie score.
  app.post("/api/flickscores/", (req, res) => {
    db.Flickscore.create(req.body).then(dbFlickscore => {
      res.json(dbFlickscore);
    });
  });

  // Get all examples
  app.get("/api/movies", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  //get movie by title
  app.get("/api/movies/:title", function(req, res) {
    db.Flickscore.findAll({
      where: {
        title: req.params.title
      }
    }).then(results => {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/movies", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
