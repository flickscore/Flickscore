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
  app.get("/api/movies", function (req, res) {
    db.Flickscore.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });
  //get movie by title
  app.get("/api/movies/:title", function (req, res) {
    console.log("LOG 1", req.params.title);
    db.Flickscore.findAll({
      where: {
        movieTitle: req.params.title
      }
    }).then(results => {
      res.json(results);
      //console.log("hey!", results[0].dataValues.movieScore);
    });
  });

  // Create a new example
  app.post("/api/movies", function (req, res) {
    const newMovie = req.body;
    console.log("req body", req.body);
    db.Flickscore.create({
      movieTitle: newMovie.movieTitle,
      movieScore: newMovie.movieScore,
      moviePoster: newMovie.moviePoster
    }).then(function (dbFlickscore) {
      res.json(dbFlickscore);
    });
  });
  // update movie with new score
  app.put("/api/movies/:title", function (req, res) {
    db.Flickscore.increment("movieScore", {
      where: {
        movieTitle: req.params.title
      }
    }).then(() => {
      db.Flickscore.findOne({ where: { movieTitle: req.params.title } }).then(
        movie => {
          res.json(movie);
        }
      );
      // console.log(dbFlickscore);
      // let foo = dbFlickscore[0][1];
      // res.json(foo);
    });
  });
};
