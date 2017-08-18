function MemoryGame () {
    // how many pairs you've successfully found
    this.score = 0;

    // how many pairs you've flipped over (both wrong ones and correct ones)
    this.attempts = 0;

    // let's us know if this is the first click or second click in a reveal
    this.firstClickedTile = null;

    // current tiles in the array with random image pairs in random order
    this.currentTiles = [];

    this.availableTiles = [
        'https://media.giphy.com/media/f6pOe5e8ShRhS/giphy.gif',
        'https://media.giphy.com/media/b9aScKLxdv0Y0/giphy.gif',
        'https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif',
        'https://media.giphy.com/media/RddAJiGxTPQFa/giphy.gif',
        'https://media.giphy.com/media/4Bzn2ezHZlxF6/giphy.gif',
        'https://media.giphy.com/media/ORiWQohCtYWDS/giphy.gif',
        'https://media.giphy.com/media/L4TYWQn8rALRu/giphy.gif',
        'https://media.giphy.com/media/wDlWKjDCTf2PC/giphy.gif',
        'https://media.giphy.com/media/4LZMbupf6oYLsBta5XwY/giphy.gif',
        'https://media.giphy.com/media/dFqP7vPEzKoM0/giphy.gif',
        'https://media.giphy.com/media/tu9mXqdJJqTqU/giphy.gif',
        'https://media.giphy.com/media/WNM0fO75eDO5W/giphy.gif',
        'https://media.giphy.com/media/MawjeMtVdOy0o/giphy.gif',
        'https://media.giphy.com/media/zB73DK8sZyhLq/giphy.gif',
        'https://media.giphy.com/media/cSTgD441hGUuY/giphy.gif',
        'https://media.giphy.com/media/3o6ozDOxCRqtm3uxrO/giphy.gif',
        'https://media.giphy.com/media/14smAwp2uHM3Di/giphy.gif',
        'https://media.giphy.com/media/EMA2GQg31g436/giphy.gif',
        'https://media.giphy.com/media/l0MYrXcBRDgVOyj9m/giphy.gif',
        'https://media.giphy.com/media/FBzqZGthkW6KQ/giphy.gif',
        'https://media.giphy.com/media/6gmG0zodJT9wA/giphy.gif',
        'https://media.giphy.com/media/N6S2qlrMhLuQo/giphy.gif',
        'https://media.giphy.com/media/rzFR7CXbusBNK/giphy.gif'
    ];
} // close function MemoryGame() {


MemoryGame.prototype.newTiles = function () {
    // randomize availableTiles
    shuffle(this.availableTiles);

    // grab the first 10 random images
    var randomImages = this.availableTiles.slice(0, 10);

    // make "currentTiles" a new mega array with each image appearing twice
    this.currentTiles = randomImages.concat(randomImages);

    // randomize the new mega array
    shuffle(this.currentTiles);

    // clear previous tiles
    $('.mega-tile-row').empty();

    // add currentTiles to the DOM
    this.currentTiles.forEach(function (oneUrl) {
        var tileDom =
          $(`<div class="col-sm-2 tile">
               <div class="actual-flip">
                 <div class="tile-back">
                   ??
                 </div>

                 <div class="tile-front">
                   <img src="` + oneUrl + `">
                 </div>
               </div>
             </div>`);

        $('.mega-tile-row').append(tileDom);
    });
}; // close MemoryGame.prototype.newTiles


MemoryGame.prototype.checkFlip = function (tileUrl) {
    // if there is a "firstClickedTile", this is the 2nd click
    if (this.firstClickedTile) {
        // 2nd clicked match if "firstClickedTile" is equal to the one we clicked
        if (this.firstClickedTile === tileUrl) {
            $('.flipped').addClass('correct');
            $('.flipped').removeClass('flipped');

            // increase score if correct
            this.score += 1;

            $('.score span').html(this.score);
        }
        else {
            // turn the cards face down after 2 seconds
            setTimeout(function () {
              $('.flipped').removeClass('flipped');
            }, 2000);
        }

        // reset the variable
        this.firstClickedTile = null;

        // increase attempts
        this.attempts += 1;

        $('.attempts span').html(this.attempts);
    }

    // otherwise, "firstClickedTile" is empty, meaning this is the 1st click
    else {
        this.firstClickedTile = tileUrl;
    }
}; // close MemoryGame.prototype.checkFlip



function shuffle (array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
