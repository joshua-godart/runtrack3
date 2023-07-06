$(document).ready(function() {
    var tiles = $(".tile");
    var emptyTile = tiles.last();
    var isGameWon = false;
  
    // Mélanger les carreaux
    shuffleTiles();
  
    // Gérer le clic sur les carreaux
    tiles.click(function() {
      if (!isGameWon) {
        var clickedTile = $(this);
        if (isValidMove(clickedTile)) {
          swapTiles(clickedTile, emptyTile);
          checkWinCondition();
        }
      }
    });
  
    // Gérer le clic sur le bouton "Recommencer"
    $("#restart").click(function() {
      isGameWon = false;
      shuffleTiles();
      tiles.css("background", "#ccc");
      $("#message").remove();
    });
  
    // Mélanger les carreaux
    function shuffleTiles() {
      var currentIndex = tiles.length;
      var temporaryValue, randomIndex;
  
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = tiles.eq(currentIndex).attr("data-value");
        tiles.eq(currentIndex).attr("data-value", tiles.eq(randomIndex).attr("data-value"));
        tiles.eq(randomIndex).attr("data-value", temporaryValue);
      }
    }
  
    // Vérifier si un déplacement est valide
    function isValidMove(clickedTile) {
      var clickedIndex = clickedTile.index();
      var emptyIndex = emptyTile.index();
      var diff = Math.abs(clickedIndex - emptyIndex);
  
      return (diff === 1 && Math.floor(clickedIndex / 3) === Math.floor(emptyIndex / 3)) ||
             (diff === 3 && clickedIndex % 3 === emptyIndex % 3);
    }
  
    // Échanger deux carreaux
    function swapTiles(tile1, tile2) {
      var tempValue = tile1.attr("data-value");
      tile1.attr("data-value", tile2.attr("data-value"));
      tile2.attr("data-value", tempValue);
      tile1.css("background", "#ccc");
      tile2.css("background", "#f00");
      emptyTile = tile1;
    }
  
    // Vérifier si le joueur a gagné
    function checkWinCondition() {
      var isCorrect = true;
      tiles.each(function() {
        var tile = $(this);
        var value = tile.attr("data-value");
        var index = tile.index();
        if (value !== "" && value != index + 1) {
          isCorrect = false;
          return false;  // Sortir de la boucle each
        }
      });
  
      if (isCorrect) {
        isGameWon = true;
        tiles.css("background", "#0f0");
        $("<div id='message'>Vous avez gagné</div>").insertBefore("#restart");
      }
    }
  });
  