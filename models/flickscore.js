module.exports = (sequelize, DataTypes) => {
  const Flickscore = sequelize.define("Flickscore", {
    movieTitle: DataTypes.STRING,
    movieScore: DataTypes.INTEGER,
    moviePoster: DataTypes.STRING
  });
  return Flickscore;
};
