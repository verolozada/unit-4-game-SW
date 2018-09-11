

$("#c1-button").on("click", function (){
    // alert("I've been CLICKED!");
    // var string = "You chose Obi"

    var newDiv = $("<div>")
    .attr("id", "newDiv")
    .html("<img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/30/11/Ewan-McGregor-as-Obi-Wan-014.jpg' width= 150px, height=100px>");
    $("#character").append(newDiv);


});

