$(document).ready(function () {
  let $movieContainer = $(".movieContainer");
  // eslint-disable-next-line no-unused-vars
  $("#likeButton").on("click", function (event) {
    let title = $(this).attr("title");
    console.log(title);
    $.ajax(`/api/movies/${title}`, {
      type: "PUT"
    }).then(function (updatedMovie) {
      console.log(
        `changed movieScore from ${updatedMovie.movieScore - 1} to 
        ${updatedMovie.movieScore}`
      );
    });
    //console.log("originalScore after call", originalScore);
  });
  // });
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
