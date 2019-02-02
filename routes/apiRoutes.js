var db = require("../models");

module.exports = function(app) {
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

<<<<<<< HEAD
  // Create a new example
  app.post("/api/movies", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
=======
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
>>>>>>> c092058513cd8f73fbc36379cb4ba6e89af3de5d
      res.json(dbExample);
    });
  });
};
