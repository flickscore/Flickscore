module.exports = function OMDB() {
    // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    $("#searchButton").on("click", function () {


        var movieTitle = $("#movieName").val().trim();
        var queryURL = "https://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";




        //OMDB AJAX CALL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {


            var url = "movie.html";
            window.location.href = url;

            var newMovie = {
                title: movieTitle,
                score: 0
            };
            function addMovie(Post) {
                $.post("/api/posts/", Post, function () {
                    window.location.href = "/";
                });
            }
            addMovie(newMovie);


            $("#movieName").html(response.Title);
            $("#plotSumary").html(response.Plot);
            $("#moviePoster").src(response.Poster);
            $("#cast").html(response.Cast);
            $("#rottenTomato").html(response.Rating);


            console.log(JSON.stringify(response));
            console.log(response.Runtime);
        });
        return OMDB;
    });

};