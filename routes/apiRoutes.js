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

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
