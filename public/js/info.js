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
    $("#likeButton").attr("title", response.Title);
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
