var memory = new MemoryGame();


$(document).ready(function () {

    // add initial 10 pairs of tiles
    memory.newTiles();

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

});
