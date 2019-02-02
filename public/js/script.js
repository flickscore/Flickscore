$(".likeButton").on("click", function(event){
    let id = $(this).data("id");

    let originalScore = $.get(`/api/Flickscore/${id}`, 
                            (res,status) => {
                                console.log(`RESULT: ${res}`);
                                console.log(`STATUS: ${status}`)
                                return res.score;
                            });

    $.ajax(`/api/Flickscore/${id}`,{
        type: "PUT",
        data: originalScore++
    }).then(function(){
        console.log(`changed movieScore from ${originalScore} to ${oringalScore++}`;
    });

});