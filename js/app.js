// ion.sound requires the website to be on a server.
// To set up a "fake" server locally, install the "http-server" command:
//
// $ npm install http-server  --global

// Once you have the command installed, run it in your project folder:
//
// $ http-server -c-1

// Then visit "http://localhost:8080" in your browser

ion.sound({
    sounds: [
        {name: "beer_can_opening"},
        {name: "bell_ring"}
    ],

    // main config
    path: "../ion.sound-3.0.7/sounds/",
    preload: true,
    multiplay: true,
    volume: 0.9
});



var memory = new MemoryGame();


$(document).ready(function () {

    // add initial 10 pairs of tiles
    memory.newTiles(10);
    enableTileClicks();


    $('.restart-button').click(function () {
        var amountOfPairs = $('.pair-input').val();

        memory.newTiles(amountOfPairs);
        enableTileClicks();
    });

}); // close $(document).ready()



function enableTileClicks () {
    $('.tile').click(function () {
        $(this).addClass('flipped');

        // get the <img> tag from inside the "tile" <div>
        var tileImageTag = $(this).find('img');

        // get the "src" attribute (the URL of the image) from the <img> tag
        var tileUrl = tileImageTag.attr('src');

        // perform the logic of flipping
        // (1st click vs. 2nd click, success vs. failure)
        memory.checkFlip(tileUrl);
    });
}
