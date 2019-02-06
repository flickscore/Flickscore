$(document).ready(function() {
  let $movieContainer = $(".movieContainer");
  // eslint-disable-next-line no-unused-vars
  $(".likeButton").on("click", function(event) {
    let id = $(this).data("id");

    let originalScore = $.get(`/api/Flickscore/${id}`, (res, status) => {
      console.log(`RESULT: ${res}`);
      console.log(`STATUS: ${status}`);
      return res.score;
    });

    $.ajax(`/api/movies/${id}`, {
      type: "PUT",
      data: originalScore++
    }).then(function() {
      console.log(
        `changed movieScore from ${originalScore} to ${oringalScore++}`
      );
    });
  });
  //array to put movies from the database
  let movies = [];

  getMovies();

  function initializeData() {
    $movieContainer.empty();
    let dataToAdd = [];
    for (i = 0; i < movies.length; i++) {
      dataToAdd.push(createNewMovie(movies[i]));
    }
    $movieContainer.prepend(dataToAdd);
  }

  function getMovies() {
    $.get("api/movies", data => {
      movies = data;
      initializeData();
    });
  }

  function createNewMovie(movie) {
    let $newMovie = $(
      [
        // eslint-disable-next-line quotes
        `<div class = "movie">`,
        "<span>",
        movie.title,
        "</span>",
        `<button class = "likeButton"> VOTE FOR ${movie.title} </button>`,
        "</div>"
      ].join("")
    );

    return $newMovie;
  }
});
