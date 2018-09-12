
function obi() { 
$("#c1-button").on("click", function (){
    // alert("I've been CLICKED!");
    // var string = "You chose Obi"
    var newDiv = $("<div>")
    .html("<img class = players src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/30/11/Ewan-McGregor-as-Obi-Wan-014.jpg'>");
    $("#character").append(newDiv);

    var newDiv1= $("<div>")
    .html("<img class= players src ='https://www.sideshowtoy.com/wp-content/uploads/2017/07/star-wars-luke-skywalker-sixth-scale-hot-toys-feature-903109.jpg'> <img class= players src ='https://www.sideshowtoy.com/wp-content/uploads/2017/07/star-wars-luke-skywalker-sixth-scale-hot-toys-feature-903109.jpg'><img class= players src ='https://www.sideshowtoy.com/wp-content/uploads/2017/07/star-wars-luke-skywalker-sixth-scale-hot-toys-feature-903109.jpg'>");
    $("#enemies").append(newDiv1);

});
}
obi();



