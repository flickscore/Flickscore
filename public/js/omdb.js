$(document).ready(function() {
  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
  $("#movie").on("click", function(event) {
    var movieTitle = $("#movieName")
      .val()
      .trim();

    window.location.href = "/movie.html?movieTitle=" + movieTitle;
    event.preventDefault();
  });
});
