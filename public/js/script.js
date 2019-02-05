$(".likeButton").on("click", function(event) {
  console.log(event);
  let title = $(this).data("title");

  let originalScore = $.get(`/api/Flickscore/${title}`, (res, status) => {
    console.log(`RESULT: ${res}`);
    console.log(`STATUS: ${status}`);
    return res.score;
  });

  $.ajax(`/api/Flickscore/${title}`, {
    type: "PUT",
    data: originalScore++
  }).then(function() {
    console.log(
      `changed movieScore from ${originalScore} to ${oringalScore++}`
    );
  });
});
