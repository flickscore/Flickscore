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
    let movieInfo = {
      movieTitle: response.Title,
      moviePoster: response.Poster
    };
    //POST to DATABASE
    $.ajax({
      url: "/api/movies",
      data: movieInfo,
      method: "POST"
    }).then(function(resp) {
      console.log("movie added");
    });
    $("#movieTitle").html(response.Title);
    $("#plotSummary").html(response.Plot);
    var img = document.createElement("img");
    img.src = response.Poster;
    var src = document.getElementById("moviePoster");
    src.appendChild(img);

    $("#cast").html(response.Actors);
    $("#rottenTomato").html(response.Ratings[1].Value);
    console.log(JSON.stringify(response));
  });
});