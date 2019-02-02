module.exports = (sequelize, DataTypes) => {
  const Flickscore = sequelize.define("Flickscore", {
    movieTitle: DataTypes.STRING,
    movieScore: DataTypes.INTEGER
  });
  return Flickscore;
};
