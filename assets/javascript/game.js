window.onload = function () {

    var characters = [{
        name: "Obi",
        attackPoints: 8,
        healthPoint: 50,
        deffendPoints: 5,
        img: "assets/images/Obi.jpg"
    }, {
        name: "Luke",
        attackPoints: 10,
        healthPoint: 40,
        deffendPoints: 6,
        img: "https://www.sideshowtoy.com/wp-content/uploads/2017/07/star-wars-luke-skywalker-sixth-scale-hot-toys-feature-903109.jpg"
    }, {
        name: "Darth",
        attackPoints: 3,
        healthPoint: 70,
        deffendPoints: 15,
        img: "assets/images/Darth.jpg"
    }, {
        name: "Battlefront",
        attackPoints: 3,
        healthPoint: 70,
        deffendPoints: 15,
        img: "assets/images/Battlefront.png"
    }];

    var chosenCharacter;
    var enemies = [];
    var attacker;

    $(".players").on("click", function () {
        var charName = $(this).attr("data-name");
        $(".players").hide();
        console.log("charName: " + charName);
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].name === charName) {
                var image = $("<img>")
                image.attr("src", characters[i].img)
                image.addClass("chars")
                $("#character").append(image)
                chosenCharacter = characters[i];
                console.log(chosenCharacter);
            } else {
                enemies.push(characters[i]);
                var image = $("<img>")
                image.attr("src", characters[i].img)
                image.attr("data-name", characters[i].name)
                image.addClass("enemies")
                $("#enemiesChar").append(image)
                console.log(enemies);
            }
        }
        var text = $("<div>")
        text.addClass("text");
        text.html("Choose your enemy")
        $("#enemiesChar").append(text);
    });

    // $(".enemies").on("click", function ()

    $("#enemiesChar").on("click", ".enemies", function () {
        var charName1 = $(this).attr("data-name");
        console.log(charName1); 
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].name === charName1) {
                var image = $("<img>")
                image.attr("src", characters[i].img)
                image.addClass("attacker")
                $("#attacker").append(image)
                attacker = characters[i];
                $(".enemies").hide();
                $(".text").hide();
            }
            else{
                var newEnemies = characters[i];
                enemies.push(newEnemies[i])
                var image = $("<img>")
                image.attr("src", characters[i].img)
                image.attr("data-name", characters[i].name)
                image.addClass("enemies")
                $("#enemiesChar").append(image)
            } 
        }
    });
}

// how to go all over the for loop again