var db = require("../models");

module.exports = app => {
  // // Get all examples
  // app.get("/api/examples", (req, res) => {
  //   db.Flickscore.findAll({}).then(dbFlickscore => {
  //     res.json(dbFlickscore);
  //   });
  // });

  // Create a new movie title & movie score.
  // app.post("/api/flickscores/", (req, res) => {
  //   db.Flickscore.create(req.body).then(dbFlickscore => {
  //     res.json(dbFlickscore);
  //   });
  // });

  // Get all examples
  app.get("/api/movies", function(req, res) {
    db.Flickscore.findAll({}).then(function(dbExamples) {
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
    db.Flickscore.create(req.body).then(function(dbFlickscore) {
      res.json(dbFlickscore);
    });
  });
  // update movie with new score
  app.put("/api/movies", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Flickscore.update(
      {
        score: req.body.score
      },
      {
        where: {
          title: req.body.title
        }
      }
    ).then(dbFlickscore => {
      res.json(dbFlickscore);
    });
  });
};
