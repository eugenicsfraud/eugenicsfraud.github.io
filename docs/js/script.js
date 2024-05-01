document.addEventListener("DOMContentLoaded", function() {
    var gamesContainer = document.getElementById("games-container");

    fetch("../assets/games.json")
        .then(response => response.json())
        .then(data => {

            data.forEach(function(item) {
                var game = document.createElement("div");
                game.className = "game";

                var image = document.createElement("img");
                image.src = item.url;
                image.alt = item.caption;

                var anchor = document.createElement("a");
                anchor.href = item.url;
                anchor.target = "_blank";

                anchor.appendChild(image);

                var caption = document.createElement("p");
                caption.textContent = item.caption;
                caption.className = "caption";

                game.appendChild(anchor);
                game.appendChild(caption);

                gamesContainer.appendChild(game);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});



/*
document.addEventListener("DOMContentLoaded", function() {
    var gamesContainer = document.getElementById("games-container");

    fetch("../assets/games.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(function(item) {
                var game = document.createElement("div");
                game.className = "game";

                var image = document.createElement("img");
                image.src = item.url;
                image.alt = item.caption;

                var caption = document.createElement("p");
                caption.textContent = item.caption;
                caption.className = "caption";

                game.appendChild(image);
                game.appendChild(caption);

                gamesContainer.appendChild(game);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
*/
