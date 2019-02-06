$(document).ready(function() {
  var urlParams = new URLSearchParams(window.location.search);
  var movieTitle = urlParams.get("movieTitle");
  var queryURL =
    "https://www.omdbapi.com/?t=" +
    movieTitle +
    "&y=&plot=short&apikey=trilogy";
  //OMDB AJAX CALL
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#movieTitle").html(response.Title);
    $("#plotSummary").html(response.Plot);
    //   $("#moviePoster").src(response.Poster);
    $("#cast").html(response.Actors);
    $("#rottenTomato").html(response.Ratings[1].Value);
    console.log(JSON.stringify(response));
  });
});
