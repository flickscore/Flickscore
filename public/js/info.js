$(document).ready(function () {
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
  }).then(function (response) {
    let movieInfo = {
      movieTitle: response.Title,
      moviePoster: response.Poster,
      movieScore: 0
    };
    $("#movieTitle").html("Title: " + response.Title);
    $("#likeButton").attr("title", response.Title);
    $("#plotSummary").html("Plot: " + response.Plot);
    $("#movieGenre").html("Genre: " + response.Genre);
    $("#movieRating").html("Rated: " + response.Rated);
    $("#movieAwards").html("Awards: " + response.Awards);
    var img = document.createElement("img");
    img.src = response.Poster;
    var src = document.getElementById("moviePoster");
    src.appendChild(img);

    $("#cast").html("Cast: " + response.Actors);
    $("#rottenTomato").html("Rating: " + response.Ratings[1].Value);
    console.log(JSON.stringify(response));
    //Check to see if movie exists in database
    $.ajax({
      url: `/api/movies/${movieInfo.movieTitle}`,
      method: "GET"
    }).then(res => {
      //if there is no result
      if (!res.length) {
        //POST to DATABASE
        $.ajax({
          url: "/api/movies",
          data: movieInfo,
          method: "POST"
        }).then(function (resp) {
          console.log("movie added");
        });
      }
    });
  });
});
