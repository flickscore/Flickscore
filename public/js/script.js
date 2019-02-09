$(document).ready(function () {
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

  // function initializeData() {
  //   $movieContainer.empty();
  //   let dataToAdd = [];
  //   for (i = 0; i < movies.length; i++) {
  //     dataToAdd.push(createNewMovie(movies[i]));
  //   }
  //   $movieContainer.prepend(dataToAdd);
  // }

  function getMovies() {
    $.get("api/movies", data => {
      movies = data;
      console.log(movies);
      // initializeData();
    });
  }
  $("#topTenBtn").on("click", function () {
    $("#tenList").empty();
    getMovies();
    let sortedMovies = [];
    sortedMovies = divide(movies).reverse();
    console.log(sortedMovies);
    for (let i = 0; i < 10; i++) {
      // eslint-disable-next-line quotes
      // eslint-disable-next-line prettier/prettier
      $("#tenList").append(`<li>${sortedMovies[i].movieTitle}: ${sortedMovies[i].movieScore} Likes</li>`);
    }
  });
});
